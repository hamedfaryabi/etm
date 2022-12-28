/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Model as MongooseModel } from "mongoose";
import mongoose from "@helpers/DatabaseHelper";

type SchemaType =
  | { [x: string]: any }
  | { [path: string]: mongoose.SchemaDefinitionProperty<undefined> }
  | { [x: string]: mongoose.SchemaDefinitionProperty<any> | undefined };

abstract class Model<T extends mongoose.AnyObject> {
  private model: MongooseModel<T>;

  constructor(model_name: string, fields: SchemaType) {
    this.model = mongoose.model<T>(model_name, new mongoose.Schema(fields));
  }

  async create(data: T) {
    const instanse = new this.model(data);
    const result = await instanse.save();
    return result;
  }

  async list(page?: number, size = 10) {
    if (page) {
      const result = await this.model
        .find()
        .skip((page - 1) * size)
        .limit(size);
      return result;
    } else {
      const result = await this.model.find();
      return result;
    }
  }

  async get(id: string) {
    const result = await this.model.findById(id);
    return result;
  }

  async update(id: string, data: T) {
    const result = await this.model.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true }
    );

    return result;
  }

  async delete(id: string) {
    const result = this.model.findByIdAndDelete(id);
    return result;
  }
}

export default Model;

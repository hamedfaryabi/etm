import { Response } from "express";

declare module "api" {
  export interface ResponseBody {
    status: boolean;
    message: string;
    data: Record<string, unknown> | Record<string, unknown>[];
  }

  export type APIResponse = Response<ResponseBody>;
}

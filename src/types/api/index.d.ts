declare module "api" {
  export interface ResponseBody {
    status: boolean;
    message: string;
    data: Record<string, unknown> | Record<string, unknown>[];
  }

  import { Response as ER } from "express";
  export type Response = ER<ResponseBody>;
}

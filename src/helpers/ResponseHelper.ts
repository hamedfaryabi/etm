/* eslint-disable @typescript-eslint/no-explicit-any */
import { ResponseBody } from "api";

export function createResponse(status: boolean, data: unknown = null, message = ""): ResponseBody<any> {
  return {
    status,
    data,
    message,
  };
}

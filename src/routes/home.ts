import { Router } from "express";
import type { Request } from "express";
import type { Response } from "api";
import { createResponse } from "@/helpers/ResponseHelper";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send(createResponse(true, "Welcome to etm"));
});

export default router;

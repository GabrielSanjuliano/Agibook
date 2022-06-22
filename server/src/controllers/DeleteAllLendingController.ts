import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class DeleteAllLendingController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const lending = await prismaClient.lending.deleteMany({
      where: {
        id,
      },
    });

    return res.json(lending);
  }
}

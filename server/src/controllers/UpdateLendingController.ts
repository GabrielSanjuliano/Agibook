import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class UpdateLendingController {
  async handle(req: Request, res: Response) {
    const { id, client_id, lending_value, fee, parcels } = req.body;

    const lending = await prismaClient.lending.update({
      where: {
        id,
      },
      data: {
        client_id,
        lending_value,
        fee,
        parcels,
      },
    });
    return res.json(lending);
  }
}

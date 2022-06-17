import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateLendingController {
  async handle(req: Request, res: Response) {
    const { client_id, lending_value, fee, parcels } = req.body;

    const lending = await prismaClient.lending.create({
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

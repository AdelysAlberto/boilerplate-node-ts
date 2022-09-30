import { Request, Response } from "express";
import { getUserService } from "../services/user.service";
import logger from '../../../../utils/logger';

const getUser = async (req: Request, res: Response) => {
  const response = await getUserService();
  logger.info(response)
  res.status(200).json(response)
}


export {
  getUser
}
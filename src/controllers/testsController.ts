import { Request, Response } from "express";
import * as testsService from "../services/testsService"
import { TTests} from "../types/TestsTypes";


export async function createTest(req:Request, res:Response) {
  const data : TTests = req.body;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  await testsService.createTest(data,token)

  res.sendStatus(201);
}

export async function getTestsDiscipline(req:Request, res:Response) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const result = await testsService.getTestsDiscipline(token);

  res.send(result).status(200);
}

export async function getTestsTeacher(req:Request, res:Response) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const result= await testsService.getTestsTeacher(token)

  res.send(result).status(200);
}


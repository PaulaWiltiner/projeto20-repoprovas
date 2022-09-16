// import { Request, Response } from "express";
// import * as testsService from "../services/testsService"
// import { TTests} from "../types/TestsTypes";


// export async function createTest(req:Request, res:Response) {
//   const data : TTests = req.body;
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   await testsService.createTest(data,token)

//   res.sendStatus(201);
// }

// export async function getTestId(req:Request, res:Response) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   const {id} =req.params
//   const result=await testsService.getCardId(Number(id),token)

//   res.send(result).status(200);
// }

// export async function getTests(req:Request, res:Response) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   const result=await testsService.getTest(token)
//   res.send(result).status(200);
//   }

//   export async function deleteCard(req:Request, res:Response) {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];
//     const {id} =req.params;
//     await testsService.deleteCard(Number(id),token)
//     return res.sendStatus(200);
//     }



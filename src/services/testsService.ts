import {  insertTest } from "../repositories/testRepository";
import { authenticateToken } from "../utils/authVerification";
import { TTests } from "../types/TestsTypes";
import { findCategory } from "./categoryService";
import { findTeacherDiscipline } from "./teacherService";

export async function createTest(data:TTests, token:string){
  await authenticateToken(token);

  const category = await findCategory(data.categoryId)
  const teacherDiscipline = await findTeacherDiscipline(data.teachersDisciplineId)
  if(!category){
    throw {code:'NotFound' , message:'Category not found'}
  }
  if(!teacherDiscipline){
    throw {code:'NotFound' , message:'id teacherDiscipline not found'}
  }

  const dataList=data
  await insertTest(dataList)
 
 }

//  export async function getCardId(id:number,token:string){
//   const userId=await authenticateToken(token);
//   const result= await findById(id);

//   if(!result){
//     throw {code:'NotFound' , message:'Card not found'}
//   }
//   if(userId!==result.userId){
//     throw {code:'Unathorized' , message:'user unathorized'}
//   }
//   console.log(result)
//   const cryptr = new Cryptr('cardTotallySecretKey');
//   const decryptedPass = cryptr.decrypt(result.password);
//   const decryptedCvc = cryptr.decrypt(result.cvc);
//   result["password"] = decryptedPass ;
//   result["cvc"] = decryptedCvc ;
      

//   return result
//  }

//  export async function getCards(token:string){
//   const userId=await authenticateToken(token);
//   const result = await find(userId);
//   const cryptr = new Cryptr('cardTotallySecretKey');
//   const response = result.map((item:any) => {
//     const decryptedPass = cryptr.decrypt(item.password);
//     const decryptedCvc = cryptr.decrypt(item.cvc);
//     item["password"] = decryptedPass ;
//     item["cvc"] = decryptedCvc ;
//     return item;
//   });
//   return response
//  }

//  export async function deleteCard(id:number,token:string){
//   const userId=await authenticateToken(token);
//   const result= await findById(id);
//   if(!result){
//     throw {code:'NotFound' , message:'Card not found'}
//   }
//   if(userId!==result.userId){
//     throw {code:'Unathorized' , message:'user unathorized'}
//   }
//   await deleteById(id);
//  }
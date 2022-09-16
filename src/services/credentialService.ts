import { findByTitleandUserId, insertCredential, findById, find, deleteById } from "../repositories/credentialsRepository";
import { authenticateToken } from "../utils/authVerification";
import Cryptr from "cryptr";

export async function createCredential(url:string,name:string,newPassword:string,title:string,token:string){
  const userId=await authenticateToken(token);
  const findOne=await findByTitleandUserId(title,userId);
 
  if (findOne.length!==0) {
    throw {code:'Conflict' , message:'title already existis'}
  }

  const cryptr = new Cryptr('cardTotallySecretKey');
  const password= cryptr.encrypt(newPassword);

  const dataList={
    url,
    name,
    password,
    userId,
    title
  }
  await insertCredential(dataList)
 
 }

 export async function getCredentialId(id:number,token:string){
  const userId=await authenticateToken(token);
  const result= await findById(id);

  if(!result){
    throw {code:'NotFound' , message:'Credential not found'}
  }
  if(userId!==result.userId){
    throw {code:'Unathorized' , message:'user unathorized'}
  }
  const cryptr = new Cryptr('cardTotallySecretKey');
  const decryptedPass = cryptr.decrypt(result.password);
  result["password"] = decryptedPass ;
      

  return result
 }

 export async function getCredentials(token:string){
  const userId=await authenticateToken(token);
  const result = await find(userId);
  const cryptr = new Cryptr('cardTotallySecretKey');
  const response = result.map((item:any) => {
    const decryptedPass = cryptr.decrypt(item.password);
    item["password"] = decryptedPass
    return item;
  });
  return response
 }

 export async function deleteCredential(id:number,token:string){
  const userId=await authenticateToken(token);
  const result= await findById(id);
  if(!result){
    throw {code:'NotFound' , message:'Credential not found'}
  }
  if(userId!==result.userId){
    throw {code:'Unathorized' , message:'user unathorized'}
  }
  await deleteById(id);
 }
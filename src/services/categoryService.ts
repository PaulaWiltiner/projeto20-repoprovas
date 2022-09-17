import { findById } from "../repositories/categoryRepository";



export async function findCategory(id:number){

  const result = await findById(id)

  return result
 
 }
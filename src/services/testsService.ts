import {  insertTest } from "../repositories/testRepository";
import { authenticateToken } from "../utils/authVerification";
import { TTests } from "../types/TestsTypes";
import { findCategory } from "./categoryService";
import { findTeacherDiscipline } from "./teacherService";

export async function createTest(data:TTests, token:string){
  await authenticateToken(token);

  const category = await findCategory(data.categoryId)
  console.log(data)
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

import { findById } from "../repositories/teacherDisciplineRepository"



export async function findTeacherDiscipline(id:number){

  const result = await findById(id)

  return result
 
 }
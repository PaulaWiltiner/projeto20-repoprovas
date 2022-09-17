import { findById } from "../repositories/teacherDisciplineRepository"



export async function findTeacherDiscipline(id:number){
  console.log(id)
  const result = await findById(id)

  return result
 
 }

 
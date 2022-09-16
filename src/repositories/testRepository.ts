
import  client  from "../config/prisma";
import { TTests } from "../types/TestsTypes";


export async function insertTest(dataList:TTests){
  const result = await client.tests.create({
   data: dataList
  })
  
  return result;
}

// export async function findByTitleandUserId(title:string,userId:number){
//   const result = await client.tests.findMany({
//    where:{
//     userId,
//     title
//    }
//   })
  
//   return result;
// }

// export async function findById(id:number){
//   const result = await client.tests.findUnique({
//    where:{
//     id
//    }
//   })
  
//   return result;
// }

// export async function find(userId:number){
//   const result = await client.tests.findMany({
//    where:{
//     userId
//    }
//   })
  
//   return result;
// }

// export async function deleteById(id:number){
//   await client.tests.delete({
//    where:{
//     id
//    }
//   })
  
// }

// export async function findType(id:number){
//   const result = await client.cardType.findUnique({
//    where:{
//     id
//    }
//   })
  
//   return result;
// }
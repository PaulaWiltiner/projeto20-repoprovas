
import  client  from "../config/prisma";
import { connection } from "../config/postgres";
import { TTests } from "../types/TestsTypes";


export async function insertTest(dataList:TTests){
  const result = await client.tests.create({
   data: dataList
  })
  
  return result;
}

export async function findTestsDiscipline(){
  const result = await connection.query(
    `
    SELECT terms.id, terms.number , json_agg(json_build_object( 'disciplineId',disciplines.id,'disciplineName' ,disciplines.name ,'categoryList' ,
                                   (SELECT json_agg(json_build_object('categoryId',categories.id, 'categoryName',
                                  categories.name, 'testList',json_build_array(json_build_object('testId',tests.id,
                                  'testName',tests.name, 'testPdfUrl', tests."pdfUrl", 'teacherName', (SELECT name FROM teachers WHERE teachers.id="teachersDisciplines"."teacherId"))))) 
    FROM categories
    JOIN tests ON categories.id=tests."categoryId"
    JOIN "teachersDisciplines" ON "teachersDisciplines".id=tests."teachersDisciplineId"
    WHERE "disciplineId"=disciplines.id
    GROUP BY "disciplineId"))) FROM disciplines
    JOIN terms ON disciplines."termId"= terms.id
    GROUP BY terms.id, terms.number
`
  );

  return result.rows;
}

export async function findTestsTeacher(){
  const result = await connection.query(
    `
    SELECT  "teachersDisciplines"."teacherId", (SELECT name FROM teachers WHERE teachers.id="teachersDisciplines"."teacherId") AS "teacherName" ,json_agg(json_build_object('testId',tests.id,
															'testName',tests.name, 'testPdfUrl', tests."pdfUrl", 'disciplineName',(SELECT name FROM disciplines WHERE disciplines.id="teachersDisciplines"."disciplineId"))) AS "testList" 
    FROM categories
    JOIN tests ON categories.id=tests."categoryId"
    JOIN "teachersDisciplines" ON "teachersDisciplines".id=tests."teachersDisciplineId"
    GROUP BY "teachersDisciplines"."teacherId"
`
  );

  return result.rows;
}

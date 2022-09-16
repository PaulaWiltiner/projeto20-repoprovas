import Joi from 'joi';

export const testsSchema = Joi.object({
  name:Joi.string().min(3).required(),
  pdfUrl: Joi.string().uri({
    scheme: ["https"],
  }),
  categoryId: Joi.number(),
  teacherDisciplineId: Joi.number()
});
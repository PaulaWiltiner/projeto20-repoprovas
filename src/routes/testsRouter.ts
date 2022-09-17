import { Router } from "express";
import { createTest, getTestsDiscipline, getTestsTeacher} from "../controllers/testsController";
import { validateSchema } from "../middlewares/schemaValidate";
import { testsSchema } from "../schemas/testsSchema";
const testsRouter = Router();

testsRouter.post("/tests",validateSchema(testsSchema), createTest);
testsRouter.get("/tests/discipline", getTestsDiscipline);
testsRouter.get("/tests/teacher", getTestsTeacher);

export default testsRouter;

 




import { Router } from "express";
import { createTest, getTests} from "../controllers/testsController";
import { validateSchema } from "../middlewares/schemaValidate";
import { testsSchema } from "../schemas/testsSchema";
const testsRouter = Router();

testsRouter.post("/tests",validateSchema(testsSchema), createTest);
testsRouter.get("/tests", getTests);

export default testsRouter;

 




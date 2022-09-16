import { Router } from "express";
import authRouter from "./authRouter";
// import cardsRouter from "./testsRouter";

const router = Router();
router.use(authRouter);
// router.use(cardsRouter);

export default router;
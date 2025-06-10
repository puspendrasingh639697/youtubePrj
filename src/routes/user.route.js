import { Router} from "express";
import { registerUser } from "../controllers/user.controller";

const router = Router()
router.route("ragister").post(registerUser)

export {router}
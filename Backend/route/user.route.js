import express from "express";
import { login, signin } from "../controller/user.controller.js";
const router= express.Router()

router.post("/sign",signin)
router.post("/login",login)

export default router;
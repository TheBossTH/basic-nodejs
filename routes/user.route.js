import express from "express"
import {Login, Register, User} from "../contollers/user.controller.js"
const user_route = express.Router()


// user_route.post("/login",(req, res) => Login(req, res))
user_route.post("/login",(req, res) => Login(req, res))
user_route.get("/register",(req, res) => Register(req, res))
user_route.get("/:id",(req, res) => User(req, res))

export default user_route
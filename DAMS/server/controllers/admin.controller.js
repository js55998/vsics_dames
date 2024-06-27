import express from 'express'
import asyncHandler from 'express-async-handler'
import { loginUser,getById} from '../services/admin.service'


//scaffolding
const app = {};

app.login=asyncHandler(async(req, res)=>{
    const { email, password } = req.body
});
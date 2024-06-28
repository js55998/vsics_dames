const express = require('express')
const asyncHandler = require('express-async-handler')
const { loginUser,getById} = require('../services/admin.service')


//scaffolding
const app = {};

app.login=asyncHandler(async(req, res)=>{
    const { email, password } = req.body
});
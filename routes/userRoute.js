const express = require('express')
const userModel = require('../model/userModel')
const router = express.Router()

router.post("/register", async (req, res) => {
    try {
        const user = await userModel.findOne({
            userId: req.body.userId
        })
        if(user){
            res.status(400).send("UserId already exists")
        }
        const newUser = new userModel({ ...req.body, verified: true })
        await newUser.save()
        res.send("sucessfully created user")
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post("/login", async (req, res) => {

    try {
        const user = await userModel.findOne({
            userId: req.body.userId,
            password: req.body.password,
            verified: true
        })
        if (user) {
            res.send({ message: "Login successful", user })
        } else {
            res.status(400).send({ message: "Login failed", user })
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router
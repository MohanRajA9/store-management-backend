const express = require('express');
const billModel = require('../model/billModel');
const router = express.Router()

router.post("/charge-bill", async (req, res) => {
    try {
        console.log(req.body)
        const newBill = new billModel(req.body)
        await newBill.save()
        res.send("Bill saved successfully")
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get("/get-bill", async (req, res) => {
    try {
        const bills = await billModel.find()
        res.send(bills)
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router
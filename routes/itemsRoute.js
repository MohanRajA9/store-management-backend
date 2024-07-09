const express = require('express');
const itemModel = require('../model/itemsModel')
const router = express.Router()

router.post("/add-items", async (req, res) => {
    try {
        const newItem = new itemModel(req.body)
        await newItem.save()
        res.send("items added successfully")
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get("/get-items", async (req, res) => {

    try {
        const item = await itemModel.find()
        res.send(item)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post("/delete-item", async (req, res) => {

    try {
        const item = await itemModel.findOneAndDelete({ _id: req.body.itemId })
        item ? res.send("item deleted successfully") : res.status(401).send({ message: "item not found" })
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post("/update-item", async (req, res) => {
    try {
        await itemModel.findOneAndUpdate({ _id: req.body.itemId }, req.body)
        res.send("item updated successfully")
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router
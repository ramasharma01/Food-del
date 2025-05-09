import foodModel from "../models/foodModle.js";
import fs from 'fs'


// add food item

const addFood = async (req, res) => {

    let image_filename = `${req.image_filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try {
        await food.save();
        res.json({ success: true, message: "Food Added" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })
    }
}

export { addFood }
import mongoose from "mongoose";    
import Product from "../../models/productsModel/product";

export const getAllProducts = async (req:any, res:any) =>{
    try {
        
        console.log("get all products");
        const products = await Product.find();
        res.status(200).json(products);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Cant get products"});
        
    }

}
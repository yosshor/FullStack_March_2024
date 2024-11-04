// delete a product

import mongoose from "mongoose";
import Product from "../../models/productsModel/product";

export const deleteProduct = async (req:any, res:any) =>{
    try {
        const {id} = req.params;
        console.log(`delete product id ${id}`);
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).json({message: "No product with that id"});

        const deletedProduct = await Product.findByIdAndDelete(id);
        res.status(200).json({message: "Product deleted successfully", deletedProduct});

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Cant delete product"});
        
    }

}
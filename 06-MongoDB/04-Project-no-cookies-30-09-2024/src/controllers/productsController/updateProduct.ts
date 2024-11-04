import { findDepartmentViaName } from "../departmentController/findDepartment";
import { checkIfProductExist } from "./utils";
import Product from "../../models/productsModel/product";
import mongoose from "mongoose";

export async function updateProduct(req: any, res: any) {
  try {
    const { id, name, image, price, department, description } = req.body;
    console.log(id, name, image, price, department, description);
    if (!id || !name || !image || !price || !department || !description) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const departmentDb = await findDepartmentViaName(department);
    const existingProduct = await checkIfProductExist(name);
    console.log(existingProduct);
    
    if (!existingProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    const product = await Product.findOneAndUpdate(
      { _id: id },
      {
        name: name,
        image:image,
        price: price,
        department: departmentDb,
        description: description,
    }
    ).exec();
   
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log(`Product ${name} updated`);
    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Cant update product" });
  }
}

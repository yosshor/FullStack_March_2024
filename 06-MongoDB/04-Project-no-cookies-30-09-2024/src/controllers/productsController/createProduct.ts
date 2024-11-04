//add product to the database

import { Request, Response } from "express";
import Product from "../../models/productsModel/product";
import Department from "../../models/departmentModel/department";
import { findDepartmentViaName } from "../departmentController/findDepartment";
import { checkIfProductExist } from "./utils";

export const createProduct = async (req: any, res: any) => {
  try {
    const { name, image, price, department, description } = req.body;
    console.log(name, image, price, department, description);

    const departmentDb = await findDepartmentViaName(department);
    const exists = await checkIfProductExist(name);
    
    if (exists) {
      return res.status(400).json({ message: "Product already exists" });
    }

    console.log(` department => ${departmentDb}`);
    const newProduct = new Product({
      name: name,
      image: image,
      price: price,
      department: departmentDb,
      description: description,
    });

    await newProduct.save();
    console.log(`Product ${name} inserted`);
    res.status(200).json({ message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "cant add product" });
  }
};

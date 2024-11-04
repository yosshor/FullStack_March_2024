import mongoose from "mongoose";    

import Department from "../../models/departmentModel/department";

export const addDepartment = async (req:any, res:any) =>{
    try {
        const {name} = req.body;
        console.log(`add department ${name}`);
        
        //check if department already exists
        const existingDepartment = await Department.findOne({name: name}).exec();
        if (existingDepartment) {
            console.log(`Department ${name} exists`);
            return res.status(400).json({message: "Department already exists"});
        }

        const newDepartment = new Department({name});
        await newDepartment.save();
        res.status(200).json({message: "Department added successfully"});

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Cant add department"});
        
    }

}
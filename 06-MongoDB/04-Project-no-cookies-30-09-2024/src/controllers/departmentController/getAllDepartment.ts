import mongoose from "mongoose";
import Department from "../../models/departmentModel/department";


export const getAllDepartment = async (req:any, res:any) =>{
    try {
        console.log("get all departments");
        const departments = await Department.find();
        res.status(200).json(departments);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Cant get departments"});
        
    }
} 
import mongoose from "mongoose";
import Department from "../../models/departmentModel/department";

export const deleteDepartment = async (req:any, res:any) =>{
    try {
        const {name} = req.params;
        console.log(`delete department ${name} ${req.params}`);
        const deletedDepartment = await Department.findOneAndDelete({name: name}).exec();
        if (!deletedDepartment) {
            console.log(`Department ${name} does not exist`);
            return res.status(400).json({message: "Department does not exist"});
        }
        res.status(200).json({message: "Department deleted successfully"});  
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Cant delete department"});
        
    }}
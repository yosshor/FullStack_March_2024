import Department from "../../models/departmentModel/department";

export const findDepartmentViaName = async (departmentName: string) => {
  try {
    const departmentDb = await Department.findOne({
      name: departmentName,
    }).exec();
    console.log(` department => ${departmentDb}`);
    if (!departmentDb) {
      console.log(`Department ${Department} not found`);
      return { error: "Department not found" };
    }
    return departmentDb._id;
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};

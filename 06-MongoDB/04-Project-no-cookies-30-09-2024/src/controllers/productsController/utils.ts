import Product from "../../models/productsModel/product";


//check if the product exeist
export const checkIfProductExist = async (name: string) => {
    const existingProduct = await Product.findOne({
        name: name,
    }).exec();
    if (existingProduct) {
        console.log(`Product ${name} exists`);
        return true;
    }
    return false;
}   
import mongoose from "mongoose";
import Product from "../models/productsModel/product";
import User from "../models/usersModel/user";
import Department from "../models/departmentModel/department";

const departments = [
  { name: "Electronics" },
  { name: "Books" },
  { name: "Clothing" },
];

const products = [
  {
    name: "Laptop",
    image: "laptop.jpg",
    price: 1000,
    department: "Electronics",
    description: "A high-performance laptop",
  },
  {
    name: "Mobile",
    image: "mobile.jpg",
    price: 500,
    department: "Electronics",
    description: "A high-performance mobile",
  },
  {
    name: "Tablet",
    image: "tablet.jpg",
    price: 700,
    department: "Electronics",
    description: "A high-performance tablet",
  },
  {
    name: "Headphones",
    image: "headphones.jpg",
    price: 200,
    department: "Electronics",
    description: "A high-performance headphones",
  },
  {
    name: "Book",
    image: "book.jpg",
    price: 20,
    department: "Books",
    description: "A good book",
  },
  {
    name: "T-shirt",
    image: "t-shirt.jpg",
    price: 10,
    department: "Clothing",
    description: "A good t-shirt",
  },
  {
    name: "Jeans",
    image: "jeans.jpg",
    price: 50,
    department: "Clothing",
    description: "A good jeans",
  },
];

const users = [
  {
    username: "john_doe",
    password: "password123",
    cart: [products[0]],
  },
  {
    username: "janes_doed",
    password: "password123s",
    cart: [products[2]],
  },
];

export const insertData = async () => {
  try {
    await insertDepartments();
    await insertProducts();
    await insertUsers();
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

const insertDepartments = async () => {
  for (const department of departments) {
    const existingDepartment = await Department.findOne({
      name: department.name,
    }).exec();
    if (existingDepartment) {
      console.log(`Department ${department.name} already exists`);
      continue;
    }

    const newDepartment = new Department(department);
    await newDepartment.save();
    console.log(`Department ${department.name} inserted`);
  }
};

const insertProducts = async () => {
  for (const product of products) {
    const existingProduct = await Product.findOne({
      name: product.name,
    }).exec();
    if (existingProduct) {
      console.log(`Product ${product.name} already exists`);
      continue;
    }

    const department = await Department.findOne({
      name: product.department,
    }).exec();
    if (!department) {
      console.log(`Department ${product.department} not found`);
      continue;
    }

    const newProduct = new Product({
      name: product.name,
      image: product.image,
      price: product.price,
      department: department._id,
      description: product.description,
    });

    await newProduct.save();
    console.log(`Product ${product.name} inserted`);
  }
};

const insertUsers = async () => {
  for (const user of users) {
    const existingUser = await User.findOne({
      username: user.username,
    }).exec();
    if (existingUser) {
      console.log(`User ${user.username} already exists`);
      continue;
    }

    const cartProductIds = await Promise.all(
      user.cart.map(async (product: any) => {
        const foundProduct = await Product.findOne({
          name: product.name,
        }).exec();
        return foundProduct ? foundProduct._id : null;
      })
    );

    const newUser = new User({
      username: user.username,
      password: user.password,
      cart: cartProductIds.filter((id: any) => id !== null),
    });

    await newUser.save();
    console.log(`User ${user.username} inserted`);
  }
};
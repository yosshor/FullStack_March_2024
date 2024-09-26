import { randomInt } from "crypto";

const route = require("express");
const router = route.Router();

class User {
  name: string;
  id: number;
  age: number;
  title: string;
  constructor(name: string, age: number, title: string, id?: number) {
    this.name = name;
    this.id = id ?? randomInt(1, 1000);
    this.age = age;
    this.title = title;
  }
}

const users: User[] = [
  new User("John", 23, "Mr", 1),
  new User("Jane", 24, "Mrs", 2),
  new User("Dan", 25, "Dr", 1234),
  new User("Doe", 26, "Prof", 12345),
];

router.get("/all-users", (req: any, res: any) => {
  res.json(users);
});

router.post("/add-user", (req: any, res: any) => {
  try {
    const { name, age, title } = req.query;
    console.log(name, age, title);
    const newUser = new User(name, age, title, randomInt(1, 1000));
    users.push(newUser);
    res.send({ users: users });
  } catch (error) {
    res.status(400).json({ message: error });
    return;
  }
});

module.exports = router;

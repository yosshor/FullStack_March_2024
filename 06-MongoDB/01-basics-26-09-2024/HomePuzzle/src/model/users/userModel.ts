import mongoose from "mongoose";

export class User {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public mobile: string;
  public address: string;
  public job: string;
  public imageUrl: string;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    mobile: string,
    address: string,
    job: string,
    imageUrl?: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
    this.address = address;
    this.job = job;
    this.imageUrl = imageUrl ?? "";
  }

  updateImageUrl(imageUrl: string) {
    this.imageUrl = imageUrl;
  }
}

export const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  mobile: String,
  address: String,
  job: String,
  imageUrl: String,
});

export const UserModel = mongoose.model("User", UserSchema);

export const users: User[] = [
  new User(
    crypto.randomUUID().toString(),
    "doggy",
    "yos@mail.com",
    "12345",
    "1234567890",
    "Mumbai",
    "Software Developer",
    "https://cdn.pixabay.com/photo/2018/10/01/09/21/pets-3715733_640.jpg"
  ),
  new User(
    crypto.randomUUID().toString(),
    "kitty",
    "manny@gmail.com",
    "12345",
    "1234567890",
    "Mumbai",
    "Software Developer",
    "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg"
  ),
];


// insert data pet into mongodb
users.forEach((user) => {
  console.log(user.name);
  UserModel.findOne({ name: user.name })
    .then(async (data: any) => {
      if (data) {
        console.log("Data already exists");
        return;
      } else {
        const { id, name, email,password, mobile, address, job, imageUrl } = user;
        if (!id || !name || !email || !password || !mobile || !address || !job || !imageUrl) {
          return console.log("missing data");
        }
        const newPet = new UserModel({ id, name, email,password, mobile, address, job, imageUrl  });
        await newPet.save();
        console.log("Data User inserted");
      }
    })
    .catch((err: any) => {
      console.log(err);
    });
});

// Fetch all pets from MongoDB
export const fetchAllUsers = async (): Promise<User[]> => {
  try {
    const allUsersFromMongo = await UserModel.find().exec();

    const users: User[] = allUsersFromMongo.map(
      (user: any) =>
        new User(
            user.id,
            user.name,
            user.email,
            user.password,
            user.mobile,
            user.address,
            user.job,
            user.imageUrl
        )
    );
    return users;
  } catch (err) {
    console.error("Error fetching Users:", err);
    return [];
  }
};

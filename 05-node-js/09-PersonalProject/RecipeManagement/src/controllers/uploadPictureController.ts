import path from "path";
import multer from "multer";
import User from "../models/User";


const storage = multer.diskStorage({
  destination: (req:any, file:any, cb:any) => {
    cb(null, 'uploads/');
  },
  filename: (req:any, file:any, cb:any) => {
    cb(null, `${req.user.id}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage });

export const uploadProfilePicture = [
  upload.single('profilePicture'),
  async (req:any, res:any) => {
    try {
      const user = await User.findById(req.user.id);
      if (user) {
        user.profilePicture = req.file.path;
        await user.save();
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (err:any) {
      res.status(500).json({ error: err.message });
    }
  }
];

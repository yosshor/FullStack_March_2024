import { User } from "../../model/userModel";

export async function getUser(req: any, res: any) {
    try {
        const { userId } = req.cookies;
        console.log(userId);
        const user = await User.findById(userId);
        if(user){
            res.status(200).send({user:user});
        }
        else{
            res.status(401).send({error:'User not found'});
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
}
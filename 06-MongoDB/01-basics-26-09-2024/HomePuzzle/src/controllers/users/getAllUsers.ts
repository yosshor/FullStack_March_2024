import { UserModel, fetchAllUsers, User }from '../../model/users/userModel'


export async function getAllUsers(req:any,res:any){
    try {
        const users: User[] = await fetchAllUsers();
        res.send({users:users});
    } catch (error) {
        console.error(error);
    }
}
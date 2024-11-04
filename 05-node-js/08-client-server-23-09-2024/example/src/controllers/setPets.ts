import { Pet ,pets} from "../model/petModel";
export function addPet(req:any, res:any){
    try {
        
        const {name,species,age,price, imageURL}=req.body;
        if(!name || !species || !age || ! price) {
            return res.status(400).send({error:"missing data"})
        }
        const newPet=new Pet(name,species,age,price, imageURL);
        pets.push(newPet);
        res.send({pets,ok:true});
    } catch (error:any) {
        console.error(error);
        
    }
}
import { updatePetID } from './updatePetID';


export function getPetID(req:any,res:any){
    try {
    
        const {petId} = req.params;
        
    
        if (!updatePetID) throw new Error("bad pet ID");
    
      
    
        res.send({ok:true} )
      } catch (error:any) {
        console.error(error)
        res.send({ ok: false, error: error.message })
      }
}
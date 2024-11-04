import { PetModel } from "../../model/petModel";

export async function updatePetsOwner(req: any, res: any) {
    try {
        const { petId, clientId } = req.body;
        if (!petId || !clientId) throw new Error("missing info");
        const updatedPet = await PetModel.findByIdAndUpdate(petId, { client: clientId }, { new: true });
        res.send({ ok: true, updatedPet });
    }
    catch (error: any) {
        console.error(error);
        res.send({ ok: false, error: error.message });
    }
}
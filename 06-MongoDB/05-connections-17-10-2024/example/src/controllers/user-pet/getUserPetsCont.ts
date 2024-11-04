import { PetModel } from "../../model/petModel";

//get all client pets
export async function getUserPets(req: any, res: any) {
    try {
        const { clientId } = req.query;
        console.log(clientId)
        if (!clientId) throw new Error("bad client ID");
        const pets = await PetModel.find({ client: clientId });
        res.send({ pets });
    } catch (error: any) {
        console.error(error);
        res.send({ ok: false, error: error.message });
    }
}

export async function getUserCart(req: any, res: any) {
    try {
        const { clientId } = req.query;
        if (!clientId) throw new Error("bad client ID");
        const clientsPets = await PetModel.find({ client: clientId, status: "cart" });

        res.send({ clientsPets });

    } catch (error) {
        console.error(error);
    }
}
import { ClientModel } from "../../model/clientModel";

export async function addClient(req: any, res: any) {
    try {
        const { name, email, phone, address } = req.body;
        if (!name || !email) throw new Error("missing info");
        const newUser = new ClientModel({ name, email, phone, address });
        await newUser.save();
        res.send({ ok: true, newUser });
    } catch (error: any) {
        console.error(error);
        res.send({ ok: false, error: error.message });
    }
}
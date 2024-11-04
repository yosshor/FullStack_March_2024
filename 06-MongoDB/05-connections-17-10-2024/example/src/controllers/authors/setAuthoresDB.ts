import { Author } from "../../model/authors/authorsModel";

export function addAuthor(req: any, res: any) {
    try {
        const { name, gender } = req.body
        if (!name ||!gender) throw new Error("Missing required fields")
        
        const author = new Author({ name, gender })
        author.save()
        res.send('Author added')
    } catch (error: any) {
        console.log(error);
        res.send('Error adding author', error.message)
    }
}
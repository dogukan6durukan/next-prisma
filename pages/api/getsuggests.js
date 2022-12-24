import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()


export default async function handler(req, res) {
    const allSuggests = await prisma.suggest.findMany();
    res.send(allSuggests);
}



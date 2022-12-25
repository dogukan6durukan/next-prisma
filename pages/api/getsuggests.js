import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();

export default async function hander(req, res) {
    const allSuggests = await prisma.suggest.findMany();
    return res.send(allSuggests);
}
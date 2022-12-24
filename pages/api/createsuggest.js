import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default withApiAuthRequired(async function handler(req, res) {
    
    if(req.method === 'POST') {
        
            try {
                const data = await prisma.user.create({
                    data : {
                       name : req.body.name,
                       email : req.body.email,
                        suggest : {
                            create : {
                                title : req.body.title,
                                description : req.body.description
                            }
                        }
                    }
                })
       
                console.log(data);
                res.json(data);
       
            } catch (err) {
                console.log(err);
                res.status(500).send({ msg : 'Error occured' })
            } 
        
    }
  
});


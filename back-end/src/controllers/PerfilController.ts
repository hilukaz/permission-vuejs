import { Request,Response } from "express"

import { prismaClient } from '../databases/prismaClient'


export class PerfilController{
    
    async view(request:Request, response:Response){

        const User=await prismaClient.user.findFirst({
            where:{
                id:Number(request.user.id)
            }/*,
            include:{
                UserCategory:true,
            }*/
        })

        if(!User){
            return response.json({
                error:"não existe o produto"
            })
        }

        return response.json(User)
            
    }        
}
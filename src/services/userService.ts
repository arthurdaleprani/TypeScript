import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
class userService {
    constructor(){}

    async createUser(user: Prisma.UserCreateInput){
            try{

                const newUser = await prisma.user.create({

                    data:user
                });
                        return newUser;
            }catch(error){
                console.log(error);
                return null;
            }



    }


        async findUsers(id: number | undefined){

            try{

                if(id){
                    const user = prisma.user.findUnique({
                        where: {
                            id
                        }
                    })
                        return user;

                }else{
                    const users = await prisma.user.findMany();
                    return users;
                }
            }catch(error){
                console.log(error)
                return null;
            }

        }


        async updateUser(id: number, newData: Prisma.UserCreateInput){
            try{
    
                const userUpdated = await prisma.user.update({
                    where: {
                        id
                    }, data:{
                        email : newData.email,
                        name: newData.name
                    }
                });
                return userUpdated;
            }catch(error){
                console.log(error)
                return null;
        }







}






}
export default new userService();
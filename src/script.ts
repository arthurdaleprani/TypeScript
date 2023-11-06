import { PrismaClient } from '@prisma/client'
import userService from './services/userService'

const prisma = new PrismaClient()

async function main() {

   await function main(){

    userService.createUser({email:"dasdwada@gmail"})
    console.log("Criado")
   }

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
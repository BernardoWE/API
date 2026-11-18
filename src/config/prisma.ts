import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient();

export const prismaConnect = async () => {
  try {
    await prisma.$connect();
    console.log("Db COnectado com sucesso");
  } catch (error) {
    console.error("Falha ao conectar ao db");
  }
};

export default prisma;

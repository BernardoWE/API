import type { FastifyInstance } from "fastify";
import createTransaction from "../controllers/transactions/createTransaction.controller.js";

export const transactionRoutes = async (fastify: FastifyInstance) => {
  fastify.route({
    method: "POST",
    url: "/",
    schema: {
        
    },
    handler: createTransaction,
  });
};

export default transactionRoutes;

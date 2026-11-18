import type { FastifyInstance } from "fastify";
import categoryRoutes from "./categories.routes.js";
import transactionRoutes from "./transaction.routes.js";

async function routes(fastify: FastifyInstance): Promise<void> {
  fastify.get("/health", async () => {
    return {
      status: "Ok",
      message: "DevBills rodando normalmente",
    };
  });
  fastify.register(categoryRoutes, { prefix: "/categories" });
  fastify.register(transactionRoutes, { prefix: "/transaction" });
}

export default routes;

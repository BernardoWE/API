import type { FastifyReply, FastifyRequest } from "fastify";

const createTransaction = async (
  request: FastifyRequest,
  reply: FastifyReply,
): Promise<void> => {
  const userId = "FED@#SDA#";

  if (!userId) {
    reply.status(401).send({ error: "Usuario não autenticado" });
  }
};

export default createTransaction;

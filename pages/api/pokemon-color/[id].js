const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const _ = require("lodash");

export default function handler(req, res) {
  const id = req.query.id;

  switch (req.method) {
    case "GET":
      return getSingle();
    case "PUT":
      return update();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getSingle() {
    const data = await prisma.pokemon_color.findUnique({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json(data);
  }

  async function update() {
    const data = await prisma.pokemon_color.update({
      where: {
        id: Number(id),
      },
      data: {
        name: req.body.name,
        isActive: req.body.is_active,
      },
    });

    res.status(200).json(data);
  }
}

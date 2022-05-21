const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getAll();
    case "POST":
      return create();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getAll() {
    const data = await prisma.pokemon_color.findMany({
      where: {
        isActive: true,
      },
    });

    res.status(200).json(data);
  }

  async function create() {
    const data = await prisma.pokemon_color.create({
      data: {
        name: req.body.name,
        isActive: req.body.is_active,
      },
    });

    res.status(200).json(data);
  }
}

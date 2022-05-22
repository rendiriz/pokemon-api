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
    const { search, limit, offset } = req.query;

    const data = await prisma.pokemon_color.findMany({
      skip: offset ? parseInt(offset) : 0,
      take: limit ? parseInt(limit) : 10,
      where: {
        isActive: true,
        name: {
          endsWith: search,
        },
      },
    });

    res.status(200).json({
      code: 200,
      error: 0,
      message: "Get data successfull",
      data,
    });
  }

  async function create() {
    const data = await prisma.pokemon_color.create({
      data: {
        name: req.body.name,
        isActive: req.body.is_active,
      },
    });

    res.status(200).json({
      code: 200,
      error: 0,
      message: "Create data successfull",
      data,
    });
  }
}

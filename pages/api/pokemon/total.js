const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getTotal();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getTotal() {
    const data = await prisma.pokemon.count({
      where: {
        isActive: true,
      },
    });

    res.status(200).json({
      code: 200,
      error: 0,
      message: "Get total data successfull",
      data: {
        count: data,
      },
    });
  }
}

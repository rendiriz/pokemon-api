const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const createManyPokemonColor = await prisma.pokemon_color.createMany({
    data: [
      {
        id: 1,
        name: "Red",
        isActive: true,
      },
      {
        id: 2,
        name: "Green",
        isActive: true,
      },
      {
        id: 3,
        name: "Blue",
        isActive: true,
      },
    ],
    skipDuplicates: true,
  });

  const createManyPokemon = await prisma.pokemon.createMany({
    data: [
      {
        id: 1,
        idPokemonColor: 2,
        name: "Bulbasaur",
        isActive: true,
      },
      {
        id: 2,
        idPokemonColor: 3,
        name: "Ivysaur",
        isActive: true,
      },
      {
        id: 3,
        idPokemonColor: 3,
        name: "Venusaur",
        isActive: true,
      },
      {
        id: 4,
        idPokemonColor: 1,
        name: "Charmander",
        isActive: true,
      },
      {
        id: 5,
        idPokemonColor: 1,
        name: "Charmeleon",
        isActive: true,
      },
      {
        id: 6,
        idPokemonColor: 1,
        name: "Charizard",
        isActive: true,
      },
      {
        id: 7,
        idPokemonColor: 1,
        name: "Butterfree",
        isActive: true,
      },
      {
        id: 8,
        idPokemonColor: 2,
        name: "Squirtle",
        isActive: true,
      },
      {
        id: 9,
        idPokemonColor: 3,
        name: "Wartortle",
        isActive: true,
      },
      {
        id: 10,
        idPokemonColor: 2,
        name: "Blastoise",
        isActive: true,
      },
      {
        id: 11,
        idPokemonColor: 1,
        name: "Caterpie",
        isActive: true,
      },
      {
        id: 12,
        idPokemonColor: 1,
        name: "Metapod",
        isActive: false,
      },
    ],
    skipDuplicates: true,
  });

  console.log({ createManyPokemonColor, createManyPokemon });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

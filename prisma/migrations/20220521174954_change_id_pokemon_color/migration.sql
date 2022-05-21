/*
  Warnings:

  - Changed the type of `id_pokemon_color` on the `pokemon` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "pokemon" DROP COLUMN "id_pokemon_color",
ADD COLUMN     "id_pokemon_color" INTEGER NOT NULL;

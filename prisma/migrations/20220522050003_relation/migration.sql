-- AddForeignKey
ALTER TABLE "pokemon" ADD CONSTRAINT "pokemon_id_pokemon_color_fkey" FOREIGN KEY ("id_pokemon_color") REFERENCES "pokemon_color"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

import { Weather } from "./Weather";
import express from "express";
import { DataSource } from "typeorm";
import { Place } from "./Place";
import { searchPlaces } from "./controllers";


const dataSource = new DataSource({
  type: "sqlite",
  database: "./sqlite.db",
  entities: [Place],
  synchronize: true,
});

const PORT = 3500;
async function main() {
  await dataSource.initialize();
  const server = express();

  const bodyParser = require("body-parser");
  server.use(bodyParser.json());

  // Message d'accueil home
  server.get("/", (_request, response) => {
    return response.json({ message: "Hello world!" });
  });

  // GET météo par ville
  server.get("/weather", async (_request, response) => {
    const weather = new Weather("Lille");
    await weather.setCurrent();
    return response.json(weather);
  });

  // GET chercher une villes (latitude, longitude)
  server.get("/search/places", searchPlaces);

  // POST Ajouter une ville à la tables Places
  server.post("/places", async (request, response) => {
    const { name, city } = request.body;
    const place = await Place.addPlace(name, city);
    return response.json({ message: `La ville ${place.name} a été ajouté avec succès.` })
  });

  // DELETE Supprimer une ville de la table Places
  server.delete("/places/:id", async (request, response) => {
    const { id } = request.params;
    try {
      await Place.deletePlace(Number(id));
      return response.json({ message: `Le lieu a été supprimé avec succès` });
    } catch (error) {
      return response.status(500).json(`Une erreur c'est produite lors de la suppresion `);
    }
  })

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });

}

main();


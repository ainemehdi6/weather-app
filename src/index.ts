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

  server.get("/", (_request, response) => {
    return response.json({ message: "Hello world!" });
  });

  server.get("/weather", async (_request, response) => {
    const weather = new Weather("Lille");
    await weather.setCurrent();
    return response.json(weather);
  });

  server.get("/search/places", searchPlaces);

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
}

main();


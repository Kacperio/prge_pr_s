const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
const app = express();
const port = 3001;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "geoport",
  password: "123",
  port: 5432,
});

app.use(cors());

app.get("/api/geojson", async (req, res) => {
  try {
    const table1Result = await pool.query(
      "SELECT *, ST_AsGeoJSON(geom) AS geojson FROM kitki"
    );
    const table2Result = await pool.query(
      "SELECT *, ST_AsGeoJSON(geom) AS geojson FROM jednostki"
    );
    const geojson1 = {
      type: "FeatureCollection",
      features: table1Result.rows.map((row) => ({
        type: "Feature",
        geometry: JSON.parse(row.geojson),
        properties: row,
      })),
    };
    const geojson2 = {
      type: "FeatureCollection",
      features: table2Result.rows.map((row) => ({
        type: "Feature",
        geometry: JSON.parse(row.geojson),
        properties: row,
      })),
    };

    res.json({ geojson1, geojson2 });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import kk from "./kitka.jpg";

const TablePage = () => {
  const [geoData1, setGeoData1] = useState(null);
  const [geoData2, setGeoData2] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/geojson")
      .then((response) => {
        setGeoData1(response.data.geojson1);
        setGeoData2(response.data.geojson2);
      })
      .catch((error) => {
        console.error("Error fetching the geojson data", error);
      });
  }, []);

  const excludeColumns = ["geom", "geojson"]; // List of columns to exclude

  const renderTable = (geoData) => (
    <div className="tabele">
      {geoData && (
        <table>
          <thead>
            <tr>
              {Object.keys(geoData.features[0].properties).map(
                (key) =>
                  !excludeColumns.includes(key) && <th key={key}>{key}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {geoData.features.map((feature, index) => (
              <tr key={index}>
                {Object.entries(feature.properties).map(
                  ([key, value]) =>
                    !excludeColumns.includes(key) && <td key={key}>{value}</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  return (
    <div className="tb">
      <img className="kitka" src={kk} alt="cuś"></img>
      <div className="asd">
        <h3 className="tb_ttl">Żołnierze</h3>
        {renderTable(geoData1)}
      </div>
      <div className="asd">
        <h3 className="tb_ttl">Jednostki</h3>
        {renderTable(geoData2)}
      </div>
    </div>
  );
};

export default TablePage;

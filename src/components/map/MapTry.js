import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  LayersControl,
  useMap,
} from "react-leaflet";
import "./Maptry.css";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css"; // CSS dla leaflet-draw
import "leaflet-draw";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapComponent = () => {
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

  function MapMeasure() {
    const map = useMap();

    useEffect(() => {
      const newFeatureGroup = new L.FeatureGroup();
      const newMeasureControl = new L.Control.Draw({
        draw: {
          marker: false,
          circle: false,
          circlemarker: false,
        },
        edit: {
          featureGroup: newFeatureGroup,
        },
      });

      map.addLayer(newFeatureGroup);
      map.addControl(newMeasureControl);

      return () => {
        map.removeLayer(newFeatureGroup);
        map.removeControl(newMeasureControl);
      };
    }, [map]);

    return null;
  }

  const onEachPointFeature = (feature, layer) => {
    if (feature.properties && feature.properties.imie) {
      layer.bindPopup(feature.properties.imie);
      layer.on({
        mouseover: (e) => {
          layer.openPopup();
        },
        mouseout: (e) => {
          layer.closePopup();
        },
      });
    }
  };

  const onEachPolygonFeature = (feature, layer) => {
    if (feature.properties && feature.properties.nazwa) {
      layer.bindPopup(feature.properties.nazwa);
    }
  };

  return (
    <div>
      <div style={{ width: "100%" }}>
        <MapContainer
          center={[52, 21]}
          zoom={6}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <LayersControl position="topright">
            <LayersControl.Overlay name="kotecki" checked>
              {geoData1 && (
                <GeoJSON
                  data={geoData1}
                  pointToLayer={(feature, latlng) => {
                    return L.marker(latlng);
                  }}
                  onEachFeature={onEachPointFeature}
                />
              )}
            </LayersControl.Overlay>
            <LayersControl.Overlay name="jednostki" checked>
              {geoData2 && (
                <GeoJSON data={geoData2} onEachFeature={onEachPolygonFeature} />
              )}
            </LayersControl.Overlay>
          </LayersControl>
          {/* Dodanie narzędzia miarki */}
          <MapMeasure />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;

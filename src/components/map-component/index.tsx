import React, {FC} from "react";
import "./map-component.css";
//@ts-ignore
import data from "../../data/floor.geojson";

import {Marker, TileLayer, GeoJSON, MapContainer} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent: FC = () => {
    let position = [53.91, 27.63];

    console.log(data)

    return (
        <div className={'map-container'}>
            <h1>My map</h1>
            <MapContainer style={{height: "80vh"}} zoom={18} center={[53.91687819154794, 27.63435423374176]}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON data={data.features}/>
            </MapContainer>
        </div>
    )
}

export default MapComponent
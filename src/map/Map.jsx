import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
    const URL = "http://localhost:9090/tracers/city"
    const [City, setCity] = useState([])

    useEffect(() => {
        fetch(URL)
            .then((res) => { return res.json() })
            .then((data) => setCity(data.data))

    }, [URL])

    console.log(City)

    return (
        <>
            <MapContainer center={[-2.1506874038215043, 113.82885858312906]} zoom={5.4} scrollWheelZoom={true}>
                <TileLayer
                    url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=3SGAV6Zv17P9yOYDs6XRFI4xQDECOqZZFt80Jsslwomo9RTQ572gCylyVzE8vDuv"
                />

                {City && City.map((city) => (
                    <div className="marker" key={city.id}>
                        <Marker position={[city.latitude, city.longitude]}>
                            <Popup>
                                <h3>City: {city.city}</h3>
                                <p>Total : {city.total}</p>

                            </Popup>
                        </Marker>
                    </div>
                ))}


            </MapContainer>
        </>
    );
}

export default Map;
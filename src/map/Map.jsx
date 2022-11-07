import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
    const URL = "http://localhost:9090/tracers"
    const [Alumnis, setAlumnis] = useState([])

    useEffect(() => {
        fetch(URL)
            .then((res) => { return res.json() })
            .then((data) => setAlumnis(data))

    }, [URL])

    console.log(Alumnis)

    return (
        <>
            <MapContainer center={[-2.1506874038215043, 113.82885858312906]} zoom={5.4} scrollWheelZoom={true}>
                <TileLayer
                    url="https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}.png?access-token=3SGAV6Zv17P9yOYDs6XRFI4xQDECOqZZFt80Jsslwomo9RTQ572gCylyVzE8vDuv"
                />

                {Alumnis && Alumnis.map((alumni) => (
                    <div className="marker" id={alumni.id}>
                        <Marker position={[alumni.latitude, alumni.longitude]}>
                            <Popup>
                                <h2>Nama: {alumni.name}</h2>
                                <p>Job: {alumni.job}</p>
                                <p>City: {alumni.city}</p>
                            </Popup>
                        </Marker>
                    </div>
                ))}


            </MapContainer>
        </>
    );
}

export default Map;
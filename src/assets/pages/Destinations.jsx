import { useParams, NavLink, useLocation } from "react-router-dom";
import data from "../data.json";
import Nav from "../components/Nav";
import "../css/destinations.css";

export default function Destinations() {
    const { name } = useParams();
    const destination = data.destinations.find(
        (arr) => arr.name.split(" ")[0] === name
    );
    const pathname = useLocation().pathname.split("/")[2];

    return (
        <div className="body">
            <div
                className={
                    pathname === name ? `container destinations ${name}` : ""
                }>
                <Nav />
                <section className="destinations--section">
                    <p className="title">
                        <span>01</span> Pick your destination
                    </p>
                    <div className="destinations--data-container">
                        <img
                            src={`../src/${destination.images.webp}`}
                            alt={`${name} picture`}
                        />
                        <div className="destinations--data-right">
                            <menu>
                                <NavLink to={"/destinations/Moon"}>
                                    <p>Moon</p>
                                </NavLink>

                                <NavLink to={"/destinations/Mars"}>
                                    <p>Mars</p>
                                </NavLink>

                                <NavLink to={"/destinations/Titan"}>
                                    <p>Titan</p>
                                </NavLink>

                                <NavLink to={"/destinations/Europa"}>
                                    <p>Europa</p>
                                </NavLink>
                            </menu>

                            <h1>{name}</h1>
                            <p className="destinations--description">
                                {destination.description}
                            </p>
                            <div className="destinations--numbers">
                                <div>
                                    <p className="subtitle">Avg. Distance</p>
                                    <p className="num">
                                        {destination.distance}
                                    </p>
                                </div>
                                <div>
                                    <p className="subtitle">Avg. Travel time</p>
                                    <p className="num">{destination.travel}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

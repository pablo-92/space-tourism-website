import { useParams, NavLink } from "react-router-dom";
import data from "../../../data.json";
import Nav from "../components/Nav";
import "../assets/css/crew.css";

export default function Crew() {
    const { name } = useParams();
    const crew = data.crew.find((arr) => arr.name.split(" ")[0] === name);

    return (
        <div className="body">
            <div className="container crew">
                <Nav />
                <section className="crew--section">
                    <p className="title">
                        <span>02</span> Meet your crew
                    </p>
                    <div className="crew--data-container">
                        <div className="crew--img-container">
                            <img
                                src={`/src/assets/Images/${crew.images.webp}`}
                                alt={`${crew.name} picture`}
                            />
                        </div>

                        <menu className="crew--submenu">
                            <NavLink to={"/crew/Douglas"}>
                                <div className="crew--submenu-element"></div>
                            </NavLink>
                            <NavLink to={"/crew/Mark"}>
                                <div className="crew--submenu-element"></div>
                            </NavLink>
                            <NavLink to={"/crew/Victor"}>
                                <div className="crew--submenu-element"></div>
                            </NavLink>
                            <NavLink to={"/crew/Anousheh"}>
                                <div className="crew--submenu-element"></div>
                            </NavLink>
                        </menu>

                        <div className="crew--data">
                            <div>
                                <h3>{crew.role}</h3>
                                <h1>{crew.name}</h1>
                            </div>
                            <p>{crew.bio}</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

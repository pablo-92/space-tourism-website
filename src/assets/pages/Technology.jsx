import { useParams, NavLink } from "react-router-dom";
import data from "../data.json";
import Nav from "../components/Nav";
import "../css/technology.css";

export default function Technology() {
    const { name } = useParams();
    const tech = data.technology.find((arr) => arr.name.split(" ")[0] === name);

    return (
        <div className="body">
            <div className="container tech">
                <Nav />

                <section className="tech--section">
                    <p className="title">
                        <span>03</span> Space launch 101
                    </p>

                    <div className="tech--data-container">
                        <div className="tech--img-container">
                            <img
                                className="portrait-img"
                                src={`../src/${tech.images.portrait}`}
                                alt={`${tech.name} picture`}
                            />
                            <img
                                className="landscape-img"
                                src={`../src/${tech.images.landscape}`}
                                alt={`${tech.name} picture`}
                            />
                        </div>
                        <div className="tech--left-content">
                            <menu>
                                <NavLink to={"/technology/Launch"}>
                                    <div>1</div>
                                </NavLink>
                                <NavLink to={"/technology/Spaceport"}>
                                    <div>2</div>
                                </NavLink>
                                <NavLink to={"/technology/Space"}>
                                    <div>3</div>
                                </NavLink>
                            </menu>
                            <div className="tech--data">
                                <header>
                                    <h4>The terminology...</h4>
                                    <h1>{tech.name}</h1>
                                </header>
                                <p className="tech--description">
                                    {tech.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

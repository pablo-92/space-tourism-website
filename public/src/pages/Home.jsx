import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import "../assets/css/home.css";

export default function Home() {
    return (
        <div className="body">
            <div className="home--container">
                <Nav />
                <section className="home--hero-container">
                    <div className="home--hero">
                        <div className="hero--text">
                            <h3>So, you want to travel to</h3>
                            <h1>Space</h1>
                            <p>
                                Let&apos;s face it; if you want to go to space,
                                you might as well genuinely go to outer space
                                and not hover kind of on the edge of it. Well
                                sit back, and relax because we&apos;ll give you
                                a truly out of this world experience!
                            </p>
                        </div>

                        <div className="explore-btn-container">
                            <Link
                                className="explore-btn"
                                to={"/destinations/Moon"}>
                                Explore
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

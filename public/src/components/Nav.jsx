import { useState } from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import "../assets/css/nav.css";

export default function Nav() {
    const [open, setOpen] = useState(false);
    const { name } = useParams();
    const { pathname } = useLocation();

    return (
        <nav>
            <img src="/src/assets/Images/shared/logo.svg" alt="logo image" />
            <button
                className="mobile-menu-btn"
                title="Open menu"
                onClick={() => {
                    setOpen(true);
                }}></button>
            <menu
                className="mobile-menu"
                style={{ right: open ? "0px" : "-260px" }}>
                <button
                    className="close-menu-btn"
                    title="Close menu"
                    onClick={() => {
                        setOpen(false);
                    }}></button>
                <NavLink to={"/"}>
                    <span>00</span> Home
                </NavLink>

                <NavLink to={"/destinations/Moon"}>
                    <span>01</span> Destination
                </NavLink>

                <NavLink to={"/crew/Douglas"}>
                    <span>02</span> Crew
                </NavLink>

                <NavLink to={"/technology/Launch"}>
                    <span>03</span> Technology
                </NavLink>
            </menu>

            <menu className="desktop-menu">
                <NavLink to={"/"}>
                    <span className="menu--num">00</span> Home
                </NavLink>
                <NavLink
                    to={"/destinations/Moon"}
                    className={
                        pathname === `/destinations/${name}` ? "active" : ""
                    }>
                    <span className="menu--num">01</span> Destination
                </NavLink>
                <NavLink
                    to={"/crew/Douglas"}
                    className={pathname === `/crew/${name}` ? "active" : ""}>
                    <span className="menu--num">02</span> Crew
                </NavLink>
                <NavLink
                    to={"/technology/Launch"}
                    className={
                        pathname === `/technology/${name}` ? "active" : ""
                    }>
                    <span className="menu--num">03</span> Technology
                </NavLink>
            </menu>
        </nav>
    );
}

import NavButton from "./NavButton";
import { Link } from "react-router-dom";

const topBar = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    background: "rgb(255,255,255)",
    zIndex: "2",
    borderBottom: "3px solid rgba(0,0,0,0.03)",
};

const navContainer = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "-0.7em",
    
};

const buttons = {
    display: "flex",
};

function Navbar() {
    return (
        <div style={navContainer}>
            <div style={topBar}>
                <div alt="Left">
                    <Link className="link" to="React-Doodles">
                        <NavButton name={<div><strong style={{fontSize : '1.2rem', color:'rgb(255,86,120)'}}>Lorem</strong><strong>Ipsum</strong></div>} />
                    </Link>
                </div>
                <div style={buttons}>
                    <Link className="link" to="/about">
                        <NavButton name="About" />
                    </Link>
                    <Link className="link" to="/contacts">
                        <NavButton name="Contacts" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;

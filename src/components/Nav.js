import navImg from "../../public/img/nav-icon.png"

function Nav(){
    return(
        <nav className="nav">
            <div className="nav-container">
                <img className="nav-img" src={navImg} alt=""/>
                <p className="nav-text">my travel journal</p>
            </div>
        </nav>
    )
}

export default Nav;

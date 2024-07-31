import "./header.css";

import logo from '../../imgs/image 2.png'


function Header() {
    return (  
        <header className="container">
            <img src={logo} alt="img" />
            <ul>
                <li>Home</li>
                <li>Learning</li>
                <li>Shop</li>
            </ul>
            <button>+ Post Yaratish</button>
        </header>
    );
}

export default Header;
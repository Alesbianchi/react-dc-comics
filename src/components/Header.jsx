// Header.jsx
export default function Header() {
    return (
        <header className="container">
            <div className="row">
                <div>
                    <img src="./public/dc-logo.png" alt="" id="logo" />
                </div>
                <div>
                    <ul className="nav-bar">
                        <li>
                            <a href="#">CHARACTERS</a>
                        </li>
                        <li>
                            <a href="#">COMICS</a>
                        </li>
                        <li>
                            <a href="#">MOVIES</a>
                        </li>
                        <li>
                            <a href="#">TV</a>
                        </li>
                        <li>
                            <a href="#">GAMES</a>
                        </li>
                        <li>
                            <a href="#">COLLECTIBLES</a>
                        </li>
                        <li>
                            <a href="#">VIDEOS</a>
                        </li>
                        <li>
                            <a href="#">FANS</a>
                        </li>
                        <li>
                            <a href="#">NEWS</a>
                        </li>
                        <li>
                            <a href="#">SHOP</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header >
    );
}
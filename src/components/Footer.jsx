export default function Footer(props) {
    return (
        <footer>
            <div className="footer-container">

                <div className="column">
                    <h3>DC COMICS</h3>
                    <ul>
                        <li><a href="#">Characters</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">News</a></li>
                    </ul>

                    <h3 className="shop">SHOP</h3>
                    <ul>
                        <li><a href="#">Shop DC</a></li>
                        <li><a href="#">Shop DC Collectibles</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>DC</h3>
                    <ul>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Ad Choices</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Talent Workshops</a></li>
                        <li><a href="#">CPSC Certificates</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Shop Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h3>SITES</h3>
                    <ul>
                        <li><a href="#">DC</a></li>
                        <li><a href="#">MAD Magazine</a></li>
                        <li><a href="#">DC Kids</a></li>
                        <li><a href="#">DC Universe</a></li>
                        <li><a href="#">DC Power Visa</a></li>
                    </ul>
                </div>

                <div className="logo-background">
                    <img src="img/dc-logo-bg.png" alt="" />
                </div>

            </div>


            <div className="footer-bottom">
                <div className="footer-container last-container">
                    <button>SIGN-UP NOW!</button>
                    <div className="social">
                        <span>FOLLOW US</span>
                        <a href="#"><img src="./img/footer-facebook.png" alt="Facebook" /></a>
                        <a href="#"><img src="./img/footer-twitter.png" alt="Twitter" /></a>
                        <a href="#"><img src="./img/footer-youtube.png" alt="YouTube" /></a>
                        <a href="#"><img src="./img/footer-pinterest.png" alt="Pinterest" /></a>
                        <a href="#"><img src="./img/footer-periscope.png" alt="Periscope" /></a>
                    </div>
                </div>
            </div>

        </footer>
    );
}
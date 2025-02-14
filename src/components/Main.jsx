import ProductsList from "./products/ProductsList.jsx";

export default function Main() {
    return (
        <main>
            <section className="container-content">
                <ProductsList />
            </section>

            <section>
                <div className="container-cards  bg-blue">
                    <div className="cards">
                        <a href="#"><img src="/img/buy-comics-digital-comics.png" alt="" className="logos" /> <span>DIGITAL COMICS</span></a>
                    </div>
                    <div className="cards">
                        <a href="#"><img src="/img/buy-comics-merchandise.png" className="logos" alt="" /> <span>DC MERCHANDISE</span></a>
                    </div>
                    <div className="cards">
                        <a href="#"><img src="/img/buy-comics-subscriptions.png" alt="" className="logos" /> <span>SUBSCRIPTION</span></a>
                    </div>
                    <div className="cards">
                        <a href="#"><img src="/img/buy-comics-shop-locator.png" alt="" className="logos" /> <span>COMIC SHOPP LOCATOR</span></a>
                    </div>
                    <div className="cards">
                        <a href="#"><img src="/img/buy-dc-power-visa.svg" alt="" className="logos" /> <span>DC POWER VISA</span></a>
                    </div>
                </div>

            </section>
        </main>
    );
}
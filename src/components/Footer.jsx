import LogoFooter from "../assets/img/dc-logo-bg.png"

export default function Footer() {


    return (
        <footer>
            <section id="footer-standard" className="container">
                <nav id="footer-list">

                    <div>
                        <ul> <h3>DC COMICS</h3>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>

                        <ul> <h3>SHOP</h3>
                            <li>Shop Dc</li>
                            <li>Shop Dc Collectibles</li>
                        </ul>

                    </div>

                    <div>
                        <ul> <h3>DC COMICS</h3>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                    </div>

                    <div>
                        <ul> <h3>DC COMICS</h3>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                        </ul>
                    </div>
                </nav>


                <div id="footer-logo">
                    <img src={LogoFooter} alt="" />
                </div>

            </section>

        </footer>

    )
}
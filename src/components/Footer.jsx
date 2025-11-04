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
                        <ul> <h3>DC</h3>
                            <li>Terms Of Use</li>
                            <li>Privacy policy (New)</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscritions</li>
                            <li>talent Workshop</li>
                            <li>CPCS Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div>
                        <ul> <h3>SITES</h3>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>Dc Universe</li>
                            <li>DC Power Visa</li>
                            <li>Create By</li>
                            <li>Jonathan</li>
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
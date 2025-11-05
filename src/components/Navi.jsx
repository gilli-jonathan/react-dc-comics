import DcPhone from "../assets/img/buy-comics-digital-comics.png"
import DcTshirt from "../assets/img/buy-comics-merchandise.png"
// import DcPhone from "../assets/img/buy-comics-digital-comics.png"
import DcPin from "../assets/img/buy-comics-shop-locator.png"
// import DcPhone from "../assets/img/buy-comics-digital-comics.png"

export default function Navi() {


    return (
        <nav id="navi-blu">
            <ul className="container">
                <li>
                    <a href="">
                        <img src={DcPhone} alt="" />
                        DIGITAL COMICS
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={DcTshirt} alt="" />
                        DC MERCHANDISE
                    </a>
                </li>
                <li>
                    <a href="">
                        {/* <img src={DcPhone} alt="" /> */}
                        SUBSCRIPTION
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src={DcPin} alt="" />
                        COMIC SHOP LOCATOR
                    </a>
                </li>
                <li>
                    <a href="">
                        {/* <img src={DcPhone} alt="" /> */}
                        DC POWER VISA
                    </a>
                </li>

            </ul>
        </nav>


    )
}
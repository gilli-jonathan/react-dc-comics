import DcPhone from "../assets/img/buy-comics-digital-comics.png"
import DcTshirt from "../assets/img/buy-comics-merchandise.png"
import DcSubscription from "../assets/img/buy-comics-subscriptions.png"
import DcPin from "../assets/img/buy-comics-shop-locator.png"
import DcVisa from "../assets/img/buy-dc-power-visa.svg"

export default function Navi() {


    return (
        <nav id="navi-blu">
            <ul className="container">
                <li>
                    <a href="">
                        <div>
                            {/* <img src={DcPhone} alt="" /> */}
                        </div>
                        DIGITAL COMICS
                    </a>
                </li>
                <li>
                    <a href="">
                        <div>
                            {/* <img src={DcTshirt} alt="" /> */}
                        </div>
                        DC MERCHANDISE
                    </a>
                </li>
                <li>
                    <a href="">
                        <div>
                            {/* {<img src={DcSubscription} alt="" />} */}
                        </div>
                        SUBSCRIPTION
                    </a>
                </li>
                <li>
                    <a href="">
                        <div>
                            {/* <img src={DcPin} alt="" /> */}
                        </div>
                        COMIC SHOP LOCATOR
                    </a>
                </li>
                <li>
                    <a href="">
                        <div>
                            {/* {<img src={DcVisa} alt="" />} */}
                        </div>
                        DC POWER VISA
                    </a>
                </li>

            </ul>
        </nav>


    )
}
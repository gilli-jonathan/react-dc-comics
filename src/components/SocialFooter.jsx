import Facebook from "../assets/img/footer-facebook.png"
import Twitter from "../assets/img/footer-twitter.png"
import Youtube from "../assets/img/footer-youtube.png"
import Pinterest from "../assets/img/footer-pinterest.png"
import Periscope from "../assets/img/footer-periscope.png"

export default function SocialFooter() {


    return (
        <section id="social-footer">
            <div className="container">
                <button>SIGN-UP NOW!</button>
                <nav>
                    <ul id="social-icon"><h4>FOLLOW US</h4>
                        <li><img src={Facebook} alt="" /></li>
                        <li><img src={Twitter} alt="" /></li>
                        <li><img src={Youtube} alt="" /></li>
                        <li><img src={Pinterest} alt="" /></li>
                        <li><img src={Periscope} alt="" /></li>
                    </ul>


                </nav>

            </div>
        </section>


    )
}
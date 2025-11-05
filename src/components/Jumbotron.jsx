import JumboImg from "../assets/img/jumbotron.jpg"

export default function Jumbotron() {


    return (
        <section>
            <div id="jumbo-img-container">
                <img id="jumbo-img" src={JumboImg} alt="" />
            </div>

        </section>
    )
}
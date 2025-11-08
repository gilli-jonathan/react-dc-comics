import comics from "../assets/comics.js"
import Card from "./Card.jsx"

export default function ComicsCard() {




    return (
        <section id="comics-section" className="container">
            <div id="card-title"><h3>CURRENT SERIES</h3></div>
            <div id="card-daddy">

                {
                    comics.map(item => (

                        <Card key={item.id} obj={item} />

                    ))
                }

            </div>
            <div id="card-btn">
                <button ><b>LOAD MORE</b></button>
            </div>

        </section>




    )
}
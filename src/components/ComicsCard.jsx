import comics from "../assets/comics.js"

export default function ComicsCard() {

    comics


    return (
        <section id="comics-section" className="container">
            <div><h3>CURRENT SERIES</h3></div>
            <div id="card-daddy">

                {
                    comics.map(item => (

                        <div className="card-img-container">
                            <img src={item.thumb} alt="" />
                            <h5>{item.series}</h5>
                        </div>

                    ))
                }

            </div>
            <button></button>

        </section>




    )
}
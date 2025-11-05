import comics from "../assets/comics.js"

export default function ComicsCard() {

    comics


    return (
        <section id="comics-section" className="container">
            <div id="card-title"><h3>CURRENT SERIES</h3></div>
            <div id="card-daddy">

                {
                    comics.map(item => (

                        <div key={item.id} className="card-img-container">
                            <img src={item.thumb} alt="" />
                            <h5>{item.series}</h5>
                        </div>

                    ))
                }

            </div>
            <div id="card-btn">
                <button ><b>LOAD MORE</b></button>
            </div>

        </section>




    )
}
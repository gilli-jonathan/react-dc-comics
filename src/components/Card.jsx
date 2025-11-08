export default function Card({ obj }) {



    return (


        <div className="card-img-container">
            <img src={obj.thumb} alt="" />
            <h5>{obj.series}</h5>
        </div>
    )
}
export default function Card({ thumb, series }) {



    return (


        <div className="card-img-container">
            <img src={thumb} alt="" />
            <h5>{series}</h5>
        </div>
    )
}
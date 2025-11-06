export default function Card({ id, thumb, series }) {



    return (


        <div key={id} className="card-img-container">
            <img src={thumb} alt="" />
            <h5>{series}</h5>
        </div>
    )
}
import { Link } from 'react-router-dom'
export default function CardViaggi({ viaggio }) {

    const { id, image, destinazione, dataInizio, dataFine } = viaggio;



    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-4 my-3">
                <div className="card mt-3">
                    <img src={image} className="card-img-top" alt={destinazione} />
                    <div className="card-body">
                        <h3 className="card-title text-warning">{destinazione}</h3>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Inizio Viaggio: <span className='fw-bold '>{dataInizio}</span></li>
                        <li className="list-group-item">Fine Viaggio: <span className='fw-bold'>{dataFine}</span></li>

                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link"><Link className="btn btn-primary" to={`/viaggio/${id}`} >Partecipanti</Link></a>
                    </div>
                </div>
            </div>


        </>
    )
}
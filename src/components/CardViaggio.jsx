import { Link } from 'react-router-dom'
export default function CardViaggi({ viaggio }) {

    const { id, image, destinazione, dataInizio, dataFine } = viaggio;



    return (
        <>
            <div className="col-4">
                <div className="card mt-3">
                    <img src={image} className="card-img-top" alt={destinazione} />
                    <div className="card-body">
                        <h5 className="card-title">{destinazione}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Inizio Viaggio: {dataInizio}</li>
                        <li className="list-group-item">Fine Viaggio: {dataFine}</li>

                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link"><Link to={`/viaggio/${id}`} >Partecipanti</Link></a>
                    </div>
                </div>
            </div>


        </>
    )
}
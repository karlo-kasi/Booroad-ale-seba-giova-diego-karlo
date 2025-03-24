import utenti from "../data/utenti.js";
import CardUtente from "../components/CardUtente.jsx";
import { useParams } from 'react-router-dom'

export default function SingleTrip() {
    // const arrayViaggiUtenti = utenti;

    const { id } = useParams();


    return (
        <section>
            <div className="row">
                {
                    utenti.map(viaggio => {
                        console.log(viaggio)
                        return (id == viaggio.viaggi_id) && <CardUtente key={viaggio.id} viaggio={viaggio} />
                    })
                }
            </div>
        </section>
    )
}
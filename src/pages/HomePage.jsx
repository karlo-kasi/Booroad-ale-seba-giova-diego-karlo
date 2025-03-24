//data
import viaggi from "../data/viaggi.js";

//component Card
import CardViaggi from "../components/CardViaggio.jsx";

export default function HomePage() {

    // const arrayViaggiUtenti = viaggi;


    return (
        <section>
            <div className="row">
                {
                    viaggi.map(viaggio => {

                        return (
                            <CardViaggi key={viaggio.id} viaggio={viaggio} />
                        )
                    })
                }
            </div>
        </section>
    )
}
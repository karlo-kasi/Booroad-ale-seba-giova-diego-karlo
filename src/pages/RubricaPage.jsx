import utenti from "../data/utenti.js"
import { useState, useEffect } from "react"

export default function RubricaPage() {

    // const arrayUtenti = utenti

    const [users, setUsers] = useState(utenti)

    const [search, setSearch] = useState("")

    const [filterUser, setFilterUser] = useState(users)

    const handleChange = (e) => {
        setSearch(e.target.value)
        console.log(search)
    }

    useEffect(() => {
        if (search == "") {
            setFilterUser(users)
        } else {
            setFilterUser(users.filter((utente) => {
                return utente.nome.toUpperCase().includes(search.toUpperCase())
            }))
        }
    }, [search, users])



    return (
        <>

            <section className="container">
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <h1>Rubrica contatti</h1>
                    <div>
                        <form className="col ">
                            <input type="text" placeholder="Cerca Utente..." onChange={handleChange} />
                        </form>
                    </div>

                </div>



                <div className="mt-3">

                    {
                        filterUser.map(utente => {
                            return (
                                <ul key={utente.id} className="list-unstyled">
                                    <li className="p-2"> {utente.nome} {utente.cognome} </li>
                                    <hr />
                                </ul>


                            )
                        })
                    }


                </div>
            </section>
        </>
    )
}
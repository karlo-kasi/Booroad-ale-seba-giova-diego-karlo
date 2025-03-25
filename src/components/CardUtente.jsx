import { useState } from 'react'

export default function CardUtente({ viaggio }) {

    const [isOpen, setIsOpen] = useState(false)
    const { nome, cognome, email, numeroTelefono, codiceFiscale } = viaggio;

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 mx-auto mt-4">
            <div className="my-2 ">
                <div className="card">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item fs-5">Nome: <span className='fw-bold '>{nome}</span></li>
                        <li className="list-group-item fs-5">Cognome: <span className='fw-bold '>{cognome}</span></li>
                        <li className="list-group-item">
                            <button className='btn btn-primary '
                                onClick={() => setIsOpen(true)}>Dettagli
                            </button>
                        </li>
                    </ul>
                </div>
                {isOpen && (
                    <div className='my-2 rounded fixed flex items-center justifi-center '>
                        <div className='container py-3 p-6 rounded-lg shadow-lg max-w-sm w-full'>
                            <p>Email: {email}</p>
                            <p>Telefono: {numeroTelefono}</p>
                            <p>Codice fiscale: {codiceFiscale}</p>
                            <button className='btn btn-light'
                                onClick={() => setIsOpen(false)}>Chiudi</button>
                        </div>
                    </div>
                )}
            </div>
        </div>


    )

}
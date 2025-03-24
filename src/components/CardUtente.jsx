import { useState } from 'react'

export default function CardUtente({ viaggio }) {

    const [isOpen, setIsOpen] = useState(false)
    const { nome, cognome, email, numeroTelefono, codiceFiscale } = viaggio;

    return (
        <div className="col-4 mx-auto">
            <div className="my-2 ">
                <div className="card bg-secondary">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item bg-secondary">Nome: {nome}</li>
                        <li className="list-group-item bg-secondary">Cognome: {cognome}</li>
                        <li className="list-group-item bg-secondary">
                            <button className='btn btn-primary rounded border-light px-4 py-2'
                                onClick={() => setIsOpen(true)}>Dettagli
                            </button>
                        </li>
                    </ul>
                </div>
                {isOpen && (
                    <div className='my-2 rounded fixed flex items-center justifi-center bg-primary'>
                        <div className='container py-3 p-6 rounded-lg shadow-lg max-w-sm w-full'>
                            <p>Email: {email}</p>
                            <p>Telefono: {numeroTelefono}</p>
                            <p>Codice fiscale: {codiceFiscale}</p>
                            <button className='btn btn-light rounded border-dark px-4 py-2'
                                onClick={() => setIsOpen(false)}>Chiudi</button>
                        </div>
                    </div>
                )}
            </div>
        </div>


    )

}
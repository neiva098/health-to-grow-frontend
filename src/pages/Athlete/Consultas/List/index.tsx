import React, { useEffect, useState } from 'react'
import Header from '../../../../components/Header'
import { IAppointament } from '../../../../interfaces/appointaments'
import { getUserAppointaments } from '../../../../services/api'
import { errorHandler } from '../../../../utils/errors'
import HeaderList from './Header'

const AthleteConsultList = (props: { history: string[] }) => {
    const [appointaments, setAppointaments] = useState<IAppointament[]>([])

    useEffect(() => {
        async function loadAppointaments() {
            try {
                setAppointaments(await getUserAppointaments('id'))
            } catch (e) {
                errorHandler(e)
            }
        }

        loadAppointaments()
    }, [])

    return (
        <div className='container'>
            <Header Component={HeaderList} componentProps={{ history: props.history }} />
            <div className='square-container'>

                <div className='search-title-container'>
                    <h1>Agendamentos Cadastrados:</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Especialista</th>
                            <th>Email</th>
                            <th>Data</th>
                            <th>Horario</th>
                            <th>Especialidade</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointaments.map(appointament => {
                                return (
                                    <tr key={appointament.id} onClick={() => {
                                        props.history.push('/athlete/consults/details/teste')
                                    }}>
                                        <th className='propertie-column'>{appointament.specialist.name}</th>
                                        <th className='propertie-column'>{appointament.specialist.email}</th>
                                        <th className='propertie-column'>{new Date(appointament.data).toLocaleDateString()}</th>
                                        <th className='propertie-column'>{new Date(appointament.data).toISOString().substr(11, 5)}</th>
                                        <th className='propertie-column'>{appointament.specialist.type}</th>
                                        <th className='propertie-column'>{appointament.status}</th>
                                    </tr >
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AthleteConsultList
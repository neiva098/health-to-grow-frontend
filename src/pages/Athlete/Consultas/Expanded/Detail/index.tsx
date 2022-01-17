import React from 'react'
import { IAppointament } from '../../../../../interfaces/appointaments'

interface OwnProps {
    agendamento: IAppointament
    history: string[]
}

export default function DetailAgendamento(props: OwnProps) {

    return (
        props.agendamento ?
            <div className='detail-agendamento-container'>
                <div className='detail-agendamento-content'>
                    <div className='detail-agendamento-data'>
                        <div className='detail-agendamento-field'>
                            <strong>Teste:</strong>
                            <p>{props.agendamento?.specialist}</p>
                        </div>
                    </div>
                </div>
            </div>
            : <div />
    )
}

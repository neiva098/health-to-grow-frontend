import React from 'react'
import { FaTrash } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'
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
                <button className='consult-delete'>
                    <FaTrash size={20} color='#00AEED'></FaTrash>
                    <p>Remover</p>
                </button>
                <button className='consult-desmarcar'>
                    <MdCancel size={20} color='#00AEED'></MdCancel>
                    <p>Desmarcar</p>
                </button>
        
                    <div className='detail-agendamento-data'>
                        <div className='detail-agendamento-field'>
                            <strong>Profissional:</strong>
                            <p>Marcus Antonio</p>
                        </div>
                        <div className='detail-agendamento-field'>
                            <strong>Especialidade:</strong>
                            <p>Nutricionista</p>
                        </div>

                        <div className='detail-agendamento-field'>
                            <strong>Data:</strong>
                            <p>05/01/2022</p>
                        </div>

                        <div className='detail-agendamento-field'>
                            <strong>Hora:</strong>
                            <p>16:00</p>
                        </div>

                        <div className='detail-agendamento-field'>
                            <strong>Observações:</strong>
                            <p className='detail-agendamento-obs'>O paciente precisa frequentar mais a academia</p>
                        </div>
                    </div>
                </div>
            </div>
            : <div />
    )
}

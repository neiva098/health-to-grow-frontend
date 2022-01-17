import React from 'react'
import { FaEdit, FaInfoCircle } from 'react-icons/fa'
import { IAppointament } from '../../../../../interfaces/appointaments'


const ExpandedAgendamentoMenu = (props: { setService: React.Dispatch<React.SetStateAction<  | 'details' >>, service:  'details' , agendamento: IAppointament }) => {
    function getStyle(service: string) {
        return props.service === service ? { backgroundColor: 'white', color: '#026A99' } : undefined
    }

    return (
        <div className='details-menu'>
            <button className='detail-menu-button' style={getStyle('details')} onClick={() => props.setService('details')}>
                <FaInfoCircle className='detail-menu-button-icon' size={16} />
                Informações gerais
            </button>
        </div>
    )
}

export default ExpandedAgendamentoMenu
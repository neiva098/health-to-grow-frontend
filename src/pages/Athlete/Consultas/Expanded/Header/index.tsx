import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { RouteComponentProps } from 'react-router-dom'

const AgendamentoDetailsHeader = (props: RouteComponentProps) => {
    return (
        <div className='menu-items'>
            <div className='group-header'>
                <button
                    className='icon'
                    onClick={() => { props.history.push('/athlete/consults') }}
                >
                    <IoIosArrowBack size={18} color='#00AEED' />
                    <p>Retornar à listagem</p>
                </button>
            </div>

        </div>
    )
}

export default AgendamentoDetailsHeader
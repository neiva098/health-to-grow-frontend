import React from 'react'
import { FiPower } from "react-icons/fi"
import { clearSession } from '../../../../services/auth'

const AthleteHeader = (props: { history: string[] }) => {
    return (
        <div className='menu-items'>
            <p
                className='link-header'
                onClick={() => props.history.push('/athlete/help')}
            >
                Ajuda
            </p>
            <button
                className='icon'
                onClick={() => { clearSession(); props.history.push('/') }}
            >
                <FiPower size={18} color={"red"} />
            </button>
        </div>
    )
}

export default AthleteHeader

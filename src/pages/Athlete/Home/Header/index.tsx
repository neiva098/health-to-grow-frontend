import React from 'react'
import { FiPower } from "react-icons/fi"
import { MdNotifications } from 'react-icons/md'
import { clearSession } from '../../../../services/auth'

const AthleteHeader = (props: { history: string[] }) => {
    return (
        <div className='menu-items'>
            <div className='group-header'>
            <p
                className='link-header'
                onClick={() => props.history.push('/athlete/help')}
            >
                Ajuda
            </p>
            </div>
            <div className='group-header'>
            <button
        
                className='icon'
                onClick={() => {   }}
            >
                <MdNotifications size={18} color={"red"} />
            </button>
            <button
                className='icon'
                onClick={() => { clearSession(); props.history.push('/') }}
            >
                <FiPower size={18} color={"red"} />
            </button>
            </div>
        </div>
    )
}

export default AthleteHeader

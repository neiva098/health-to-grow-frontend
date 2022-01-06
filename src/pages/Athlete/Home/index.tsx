import React from 'react'
import Header from '../../../components/Header'
import Modules from '../../../components/modules'
import { homeModules } from './modules'
import HomeHeader from './Header'
import './style.css'



export default function AthleteHome(props: { history: History }) {
    return (
        <div className='user-home'>
            <Header Component={HomeHeader} componentProps={{ history: props.history }}></Header>
            <Modules modules={homeModules} history={props.history}></Modules>
        </div>
    )
}


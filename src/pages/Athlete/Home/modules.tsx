import React from "react";
import { GiCalendar, GiGymBag, GiOpenedFoodCan } from "react-icons/gi";
import { ModuleComponent } from "../../../components/modules/interfaces";


export const homeModules: ModuleComponent[] = [
    {
        icon:  <GiOpenedFoodCan size={65} className='icon' ></GiOpenedFoodCan>,
        title: 'Dieta',
        action: (props: {history: string[]}) => props.history.push('/fiscofacil/certificates/list')
    },
    {
        icon: <GiGymBag  size={65} className='icon' ></GiGymBag>,
        title: 'Ficha de Treino',
        action: (props: {history: string[]}) => props.history.push('/fiscofacil/users/list')
    },
    {
        icon:  <GiCalendar size={65} className='icon' color=''></GiCalendar>,
        title: 'Agendamentos',
        action: (props: {history: string[]}) => props.history.push('/fiscofacil/consults/list')
    },
]

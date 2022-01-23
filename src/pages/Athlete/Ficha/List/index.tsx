import React, { useEffect, useState } from 'react'
import Header from '../../../../components/Header'
import { IExercice } from '../../../../interfaces/user'
import { getExercises } from '../../../../services/api'
import { errorHandler } from '../../../../utils/errors'
import HeaderList from './Header'

const AthleteExerciseList = (props: { history: string[] }) => {
    const [exercices, setExercices] = useState<IExercice[]>([])

    useEffect(() => {
        async function loadAppointaments() {
            try {
                setExercices(await getExercises())
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
                    <h1>Ficha:</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Série</th>
                            <th>Repetições</th>
                            <th>Carga</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            exercices.map(exercice => {
                                return (
                                    <tr key={exercice.id}>
                                        <th className='propertie-column'>{exercice.nome}</th>
                                        <th className='propertie-column'>{exercice.serie}</th>
                                        <th className='propertie-column'>{exercice.repeticoes}</th>
                                        <th className='propertie-column'>{exercice.carga}</th>
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

export default AthleteExerciseList
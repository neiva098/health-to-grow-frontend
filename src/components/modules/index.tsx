import React, { useEffect, useState } from 'react'
import { ModuleComponent } from './interfaces'

import './style.css'


export default function Modules(props: { modules: ModuleComponent[], history: History }) {
    const [blocksListStyle, setBlocksListStyle] = useState({
        'gridTemplateColumns': 'repeat(3, 1fr)',
    })

    useEffect(() => {
        const calculeColumnsQt = () => {
            const modulesWidth = props.modules.length * 120
            const qtColumns = Number.parseInt(String(window.innerWidth / modulesWidth))
            return {
                actual: Number(blocksListStyle.gridTemplateColumns[7]),
                max: qtColumns
            }
        }
        const updateHeader = () => {
            const columnsQt = calculeColumnsQt()

            console.log(columnsQt)

            if (columnsQt.max !== columnsQt.actual) {
                console.log(`repeat(${columnsQt.max}, 1fr)`)
                setBlocksListStyle({
                    gridTemplateColumns: `repeat(${columnsQt.max}, 1fr)`,
                })
            }
        }
        window.addEventListener('resize', updateHeader)

        return () => {
            window.removeEventListener('resize', updateHeader)
        }
    }, [blocksListStyle.gridTemplateColumns, props.modules.length])

    return (
        <div className='modules-container'>
            <ul style={blocksListStyle}>
                {
                    props.modules.map((module, index) => {
                        return (
                            <li onClick={async () => await module.action(props)} key={index}>
                                {module.icon}
                                <p>{module.title}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


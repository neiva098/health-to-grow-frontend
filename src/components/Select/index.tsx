import React from 'react'
import './style.css'

interface Options {
    default: string
    setState: React.Dispatch<React.SetStateAction<string>>
    options: SeletOptionInterface[]
}

export interface SeletOptionInterface {
    value: string
    label: string
}

export default (props: Options) => {
    return (
        <div className='select-container'>
            <select onChange={(event) => { props.setState(event.target.value) }} >
                <option hidden>{props.default}</option>
                {
                    props.options.map((option, index) => {
                        return (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}
import React from 'react'

export default function Display({ strike, ball }) {
    return (
        <div>
            <h1>Ball</h1>
            <div>{ ball }</div>
            <h1>Strike</h1>
            <div>{ strike }</div>
        </div>
    )
}

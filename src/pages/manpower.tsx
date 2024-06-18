import React from 'react'

function Manpower() {
    return (
        <div>
            <span>Manpower</span>
            {
                [...Array(50)].map((_, i) => <p key={i}>{i}</p>)
            }
        </div>
    )
}

export default Manpower
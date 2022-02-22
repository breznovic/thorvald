import React, {useState} from 'react'
import {FighterType} from "../../../App";
import {Fighter} from "../../enemies/Fighter/Fighter";
import './Fight.css'

type PropsType = {
    fighters: Array<FighterType>
}

export const Fight = (props: PropsType) => {

    return (
        <div className='fight'>
            {props.fighters.map(f => (<Fighter
                name={f.name}
                fullHP={f.fullHP}
                armor={f.armor}
                strength={f.strength}
                avatar={f.avatar}
                key={f.id}
                id={f.id}
                hit={f.hit}/>)
            )}

        </div>
    )
}
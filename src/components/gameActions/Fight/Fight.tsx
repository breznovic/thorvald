import React from 'react'
import {FighterType} from "../../../App";
import {Fighter} from "../../enemies/Fighter/Fighter";
import './Fight.css'
import { Alert } from 'react-bootstrap'

type PropsType = {
    fighters: Array<FighterType>
}

<Alert variant={'primary'}>Tap on image of enemy for hit him!</Alert>

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
import React from 'react'
import {FighterType, GameStatsType} from "../../../App"
import {Fighter} from "../../enemies/Fighter/Fighter"
import './Fight.css'

type PropsType = {
    thorvald: FighterType
    enemies: Array<FighterType>
    gameStats: GameStatsType
}

// alert("Tap on image of enemy for hit him!")

export const Fight = (props: PropsType) => {

    let enemy = props.enemies.find(en => !en.isDead)

    return <div className='fight'>
        <Fighter fighter={props.thorvald} gameStats={props.gameStats}/>
        {enemy ? <Fighter fighter={enemy}/> : ''}
    </div>
}
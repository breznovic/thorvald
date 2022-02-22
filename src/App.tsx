import React, {useState} from 'react'
import './App.css'
import {Fight} from "./components/gameActions/Fight/Fight"
import {v1} from "uuid"

export type FighterType = {
    id: string
    name: string
    fullHP: number
    armor: number
    strength: number
    avatar: string
    hit: (id: string) => void
}

function App() {

    let thorvald: FighterType = (
        {
            id: v1(),
            name: 'Thorvald',
            strength: 5,
            fullHP: 100,
            armor: 0,
            avatar: 'https://i.pinimg.com/originals/31/46/1b/31461b321a171a627646a836b259d937.png',
            hit: hitHandler,
        }
    )

    let guard: FighterType = (
        {
            id: v1(),
            name: 'Guard',
            strength: 1,
            fullHP: 50,
            armor: 0,
            avatar: 'https://64.media.tumblr.com/28146c7955b7025d394d43467f64fb52/tumblr_p0p3ljjsir1tibuboo1_1280.jpg',
            hit: hitHandler,
        }
    )

    let [fighters, setFighters] = useState<Array<FighterType>>([thorvald, guard])

    function hitHandler(id: string) {

        let fightersCopy = [...fighters]

        let whoHits = fightersCopy.find(f => f.id === id)
        let whoIsBitten = fightersCopy.find(f => f.id !== id)

        if (whoIsBitten && whoHits) {
            whoIsBitten.fullHP = whoIsBitten.fullHP - (whoHits.strength - whoIsBitten.armor)
        }

        setFighters(fightersCopy)
    }

    return (
        <div className="app">
            <Fight fighters={fighters}/>
        </div>
    )
}

export default App

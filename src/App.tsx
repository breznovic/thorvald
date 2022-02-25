import React, {useState} from 'react'
import './App.css'
import {Fight} from "./components/gameActions/Fight/Fight"
import {v1} from "uuid"

export type GameStatsType = {
    levelsScore: Array<number>
}

export type FighterType = {
    id: string
    name: string
    fullHP: number
    armor: number
    strength: number
    avatar: string
    hit: (id: string) => void
    XP?: number
    level: number
    isDead: boolean
}

function App() {

    const gameStats: GameStatsType = {
        levelsScore: [10, 20, 30],
    }

    let guard: FighterType =
        {
            id: v1(),
            name: 'Guard',
            strength: 1,
            fullHP: 10,
            armor: 0,
            avatar: 'https://64.media.tumblr.com/28146c7955b7025d394d43467f64fb52/tumblr_p0p3ljjsir1tibuboo1_1280.jpg',
            hit: hitHandler,
            XP: 10,
            level: 1,
            isDead: false
        }

    let archer: FighterType =
        {
            id: v1(),
            name: 'Archer',
            strength: 2,
            fullHP: 10,
            armor: 1,
            avatar: 'https://c4.wallpaperflare.com/wallpaper/225/704/859/fantasy-art-archer-fantasy-girl-redhead-wallpaper-preview.jpg',
            hit: hitHandler,
            XP: 10,
            level: 1,
            isDead: false
        }

    let archer2: FighterType =
        {
            id: v1(),
            name: 'Archer2',
            strength: 2,
            fullHP: 10,
            armor: 1,
            avatar: 'https://c4.wallpaperflare.com/wallpaper/225/704/859/fantasy-art-archer-fantasy-girl-redhead-wallpaper-preview.jpg',
            hit: hitHandler,
            XP: 10,
            level: 1,
            isDead: false
        }

    let [thorvald, setThorvald] = useState({
        id: v1(),
        name: 'Thorvald',
        strength: 5,
        fullHP: 100,
        armor: 0,
        avatar: 'https://i.pinimg.com/originals/31/46/1b/31461b321a171a627646a836b259d937.png',
        hit: hitHandler,
        XP: 0,
        level: 1,
        isDead: false
    })

    let [enemies, setEnemies] = useState<Array<FighterType>>([guard, archer, archer2])

    function hitHandler(id: string) {

        let enemiesCopy = [...enemies]

        let whoIsBitten = enemiesCopy.find(en => en.id === id)

        if (whoIsBitten) {
            whoIsBitten.fullHP = whoIsBitten.fullHP - (thorvald.strength - whoIsBitten.armor)
            if (whoIsBitten.fullHP <= 0) {
                whoIsBitten.isDead = true

                if (whoIsBitten.XP) {
                    thorvald.XP += whoIsBitten.XP
                }

                if (thorvald.XP >= gameStats.levelsScore[thorvald.level - 1]) {
                    thorvald.level += 1
                    thorvald.XP = 0
                    thorvald.fullHP += 10
                }
            }
        }
        setEnemies(enemiesCopy)
    }

    return (
        <div className="app">
            <Fight gameStats={gameStats} thorvald={thorvald} enemies={enemies}/>
        </div>
    )
}

export default App
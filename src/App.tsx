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
        levelsScore: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
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
            XP: 5,
            level: 1,
            isDead: false
        }

    let guard2: FighterType =
        {
            id: v1(),
            name: 'Guard',
            strength: 1,
            fullHP: 10,
            armor: 0,
            avatar: 'https://64.media.tumblr.com/28146c7955b7025d394d43467f64fb52/tumblr_p0p3ljjsir1tibuboo1_1280.jpg',
            hit: hitHandler,
            XP: 5,
            level: 1,
            isDead: false
        }

    let guard3: FighterType =
        {
            id: v1(),
            name: 'Guard',
            strength: 1,
            fullHP: 10,
            armor: 0,
            avatar: 'https://64.media.tumblr.com/28146c7955b7025d394d43467f64fb52/tumblr_p0p3ljjsir1tibuboo1_1280.jpg',
            hit: hitHandler,
            XP: 5,
            level: 1,
            isDead: false
        }

    let guard4: FighterType =
        {
            id: v1(),
            name: 'Guard',
            strength: 1,
            fullHP: 10,
            armor: 0,
            avatar: 'https://64.media.tumblr.com/28146c7955b7025d394d43467f64fb52/tumblr_p0p3ljjsir1tibuboo1_1280.jpg',
            hit: hitHandler,
            XP: 5,
            level: 1,
            isDead: false
        }

    let guard5: FighterType =
        {
            id: v1(),
            name: 'Guard',
            strength: 1,
            fullHP: 10,
            armor: 0,
            avatar: 'https://64.media.tumblr.com/28146c7955b7025d394d43467f64fb52/tumblr_p0p3ljjsir1tibuboo1_1280.jpg',
            hit: hitHandler,
            XP: 5,
            level: 1,
            isDead: false
        }

    let guard6: FighterType =
        {
            id: v1(),
            name: 'Guard',
            strength: 1,
            fullHP: 10,
            armor: 0,
            avatar: 'https://64.media.tumblr.com/28146c7955b7025d394d43467f64fb52/tumblr_p0p3ljjsir1tibuboo1_1280.jpg',
            hit: hitHandler,
            XP: 5,
            level: 1,
            isDead: false
        }

    let archer: FighterType =
        {
            id: v1(),
            name: 'Archer',
            strength: 2,
            fullHP: 20,
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
            name: 'Archer',
            strength: 2,
            fullHP: 20,
            armor: 1,
            avatar: 'https://c4.wallpaperflare.com/wallpaper/225/704/859/fantasy-art-archer-fantasy-girl-redhead-wallpaper-preview.jpg',
            hit: hitHandler,
            XP: 10,
            level: 1,
            isDead: false
        }

    let archer3: FighterType =
        {
            id: v1(),
            name: 'Archer',
            strength: 2,
            fullHP: 20,
            armor: 1,
            avatar: 'https://c4.wallpaperflare.com/wallpaper/225/704/859/fantasy-art-archer-fantasy-girl-redhead-wallpaper-preview.jpg',
            hit: hitHandler,
            XP: 10,
            level: 1,
            isDead: false
        }

    let archer4: FighterType =
        {
            id: v1(),
            name: 'Archer',
            strength: 2,
            fullHP: 20,
            armor: 1,
            avatar: 'https://c4.wallpaperflare.com/wallpaper/225/704/859/fantasy-art-archer-fantasy-girl-redhead-wallpaper-preview.jpg',
            hit: hitHandler,
            XP: 10,
            level: 1,
            isDead: false
        }

    let warrior: FighterType =
        {
            id: v1(),
            name: 'Warrior',
            strength: 4,
            fullHP: 30,
            armor: 3,
            avatar: 'https://wallpapersmug.com/large/ad2083/fantasy-warrior-art.jpg',
            hit: hitHandler,
            XP: 15,
            level: 1,
            isDead: false
        }

    let warrior2: FighterType =
        {
            id: v1(),
            name: 'Warrior',
            strength: 4,
            fullHP: 30,
            armor: 3,
            avatar: 'https://wallpapersmug.com/large/ad2083/fantasy-warrior-art.jpg',
            hit: hitHandler,
            XP: 15,
            level: 1,
            isDead: false
        }

    let warrior3: FighterType =
        {
            id: v1(),
            name: 'Warrior',
            strength: 4,
            fullHP: 30,
            armor: 3,
            avatar: 'https://wallpapersmug.com/large/ad2083/fantasy-warrior-art.jpg',
            hit: hitHandler,
            XP: 15,
            level: 1,
            isDead: false
        }

    let knight: FighterType =
        {
            id: v1(),
            name: 'Knight',
            strength: 5,
            fullHP: 50,
            armor: 5,
            avatar: 'https://steamuserimages-a.akamaihd.net/ugc/911296644864742654/0F8D9C3A40ABB6D62C3EFA6750F1AFD2372A251F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            hit: hitHandler,
            XP: 20,
            level: 1,
            isDead: false
        }

    let knight2: FighterType =
        {
            id: v1(),
            name: 'Knight',
            strength: 5,
            fullHP: 50,
            armor: 5,
            avatar: 'https://steamuserimages-a.akamaihd.net/ugc/911296644864742654/0F8D9C3A40ABB6D62C3EFA6750F1AFD2372A251F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            hit: hitHandler,
            XP: 20,
            level: 1,
            isDead: false
        }

    let knight3: FighterType =
        {
            id: v1(),
            name: 'Knight',
            strength: 5,
            fullHP: 50,
            armor: 5,
            avatar: 'https://steamuserimages-a.akamaihd.net/ugc/911296644864742654/0F8D9C3A40ABB6D62C3EFA6750F1AFD2372A251F/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
            hit: hitHandler,
            XP: 20,
            level: 1,
            isDead: false
        }

    let guardsman: FighterType =
        {
            id: v1(),
            name: 'Guardsman',
            strength: 7,
            fullHP: 70,
            armor: 8,
            avatar: 'https://kingstonyouthlacrosse.org/800/600/https/i.imgur.com/c1XwbKr.jpg[/img]',
            hit: hitHandler,
            XP: 30,
            level: 1,
            isDead: false
        }

    let guardsman2: FighterType =
        {
            id: v1(),
            name: 'Guardsman',
            strength: 7,
            fullHP: 70,
            armor: 8,
            avatar: 'https://kingstonyouthlacrosse.org/800/600/https/i.imgur.com/c1XwbKr.jpg[/img]',
            hit: hitHandler,
            XP: 30,
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

    let [enemies, setEnemies] = useState<Array<FighterType>>([
        guard, guard2, guard3, guard4, guard5, guard6,
        archer, archer2, archer3, archer4,
        warrior, warrior2, warrior3,
        knight, knight2, knight3,
        guardsman, guardsman2,
    ])

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
                    thorvald.strength += 1
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
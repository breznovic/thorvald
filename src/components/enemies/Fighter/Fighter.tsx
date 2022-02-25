import {FighterType, GameStatsType} from "../../../App";
import './Fighter.css'

type PropsType = {
    fighter: FighterType
    gameStats?: GameStatsType
}

export const Fighter = (props: PropsType) => {

    const hitHandler = () => {
        if (props.fighter.hit) {
            props.fighter.hit(props.fighter.id)
        }
    }
    return (
        <div>
            <div className='fighter'>
                <div>{props.fighter.name}</div>
                <div>Level: {props.fighter.level}</div>
                <div>XP: {props.fighter.XP} {props.fighter.name === 'Thorvald' ?
                    "/ " + props.gameStats?.levelsScore[props.fighter.level - 1] : ""}
                </div>
                {props.fighter.name !== 'Thorvald' ?
                    <div onClick={hitHandler}><img src={props.fighter.avatar}/></div> :
                    <img src={props.fighter.avatar}/>}
                <div>Strength: {props.fighter.strength}</div>
                <div>Armor: {props.fighter.armor}</div>
                <div>HP: {props.fighter.fullHP}</div>
            </div>
        </div>
    )
}



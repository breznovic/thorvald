import {FighterType} from "../../../App";
import './Fighter.css'

export const Fighter = (props: FighterType) => {

    function hitHandler() {
        props.hit(props.id)
    }

    return (
        <div className='fighter'>
            <div>{props.name}</div>
            <img src={props.avatar}/>
            <div>Strength: {props.strength}</div>
            <div>Armor: {props.armor}</div>
            <div>HP: {props.fullHP}</div>
            <button onClick={hitHandler}>Hit!</button>
        </div>
    )
}



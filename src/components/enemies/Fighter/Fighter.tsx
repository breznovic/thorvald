import {FighterType} from "../../../App";
import './Fighter.css'

export const Fighter = (props: FighterType) => {

    function hitHandler() {
        if (props.hit) {
            props.hit(props.id)
        }
    }

    return (
        <div>
            <div className='fighter'>
                <div>{props.name}</div>
                {props.name === 'Thorvald' ?  <img src={props.avatar}/> : <img src={props.avatar} onClick={hitHandler}/>}
                <div>Strength: {props.strength}</div>
                <div>Armor: {props.armor}</div>
                <div>HP: {props.fullHP}</div>
            </div>
        </div>
    )
}



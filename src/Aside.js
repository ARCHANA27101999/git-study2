import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import randomColor from "randomcolor"

import { chage_color } from './Redux/color/colorSlice'
function Aside() {
    const color=useSelector(state=>state.color.value)
    const dispatch = useDispatch()
    const changeColor=()=>{
        dispatch(chage_color({
            color:randomColor()

        }))
    }
  return (
    <div className='aside'>
        <h2 style={{color}}>Aside</h2>
        <button onClick={changeColor}>change color</button>

    </div>
  )
}

export default Aside
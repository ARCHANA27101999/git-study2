import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increase_count,decrease_count } from './Redux/count/count'
function Counter() {
    const count =useSelector(state=>state.count.value)
    const dispatch=useDispatch()
    const change_count=()=>{
        dispatch(increase_count())
    }
    const change_count1=()=>{
        dispatch(decrease_count())
    }

  return (

    <div className='counter'>
        <h2>counter</h2>
        <h3 >the count is{count}</h3>
        <button onClick={change_count}>increase</button>
        <button onClick={change_count1}>decrease</button>

    </div>
  )
}

export default Counter
import React from 'react'
import {useSelector} from 'react-redux'

function Footer() {
  const count=useSelector(state=>state.count.value)
    const color=useSelector(state=>state.color.value)
  return (
    <div className='footer'>
        <p style={{color}}>my redux project footer</p>
        <p>{count}</p>

    </div>
  )
}

export default Footer
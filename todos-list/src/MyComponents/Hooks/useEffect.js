import React, { useState , useEffect } from 'react'
import "./style.css"


//when we have to do in a website after clicking or open awebsite like open a website and after 5 seconds a pop up appears


const UseEffect = () => {
    // const initialData = 10;
  const[myNum, setMyNum] = useState(5 )

  useEffect (() => {
console.log("hii")
  })     
  return (
    <>
       <div className='center_div'>
        <p> {myNum} </p>
        <div class='button2' onClick={() => setMyNum(myNum +1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Increment
        </div>
        

    </div>
    </>
  )
}

export default UseEffect

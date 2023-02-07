import React from 'react'


import 'rabbitui/dist/index.css'
import Button from './Button'
import Count from './Count'
import Header from './Headr'

const App = () => {
  return (
    <>
  
    <Button text="click" onClick={()=>alert("deneme çalışması")}/>
    <Header text="canım sıkılıyır"/>
    <Count/>
    </>
  )
  }
export default App

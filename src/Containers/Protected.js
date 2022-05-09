import { useEffect } from "react"
import React  from 'react'
import { useNavigate } from "react-router-dom";
 

const Protected = (props) => {
  let Cmp = props.Cmp;
  const history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('user_info')) {
      history('/login')
    }
  }, [])
  return (
    <div>
      <Cmp />
    </div>
  )
}

export default Protected

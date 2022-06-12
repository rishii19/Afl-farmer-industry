import { useEffect } from "react"
import React  from 'react'
import { useNavigate } from "react-router-dom";
 

const Protected = (props) => {
  const history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      history('/login')
    }
  }, [])
  return (
    <div>
    </div>
  )
}

export default Protected

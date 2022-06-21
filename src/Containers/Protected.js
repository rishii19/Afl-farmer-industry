import { useEffect } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom";

const Protected = ({ Cmp }) => {

  const history = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('access_token')) {
      history('/login')
    }
  }, [])

  return (
    <>
      <Cmp />
    </>
  )
}

export default Protected

import React from 'react'

import { useParams } from "react-router-dom"

function Profile() {

  // const params = useParams()
  // console.log(params)
  const { name } = useParams()

  return (
    <div>Perfil de : {name}</div>
  )
}

export default Profile
import React, { useContext, useState } from 'react'
import * as App from './App'

export default function EditCV() {

  const cv = useContext(App.CVContext)
  const [cvData, setCvData] = useState(cv)

  const handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    // cvData[key] = value
    // setCvData(change)
  }


  return (
    <div className="edit-form">
      <h1>Edit Your CV</h1>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" id="" value={cvData.name} />
      <label htmlFor="profession">Profession: </label>
      <input type="text" name="profession" id="" value={cvData.profession} />
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="" value={cvData.contacts.email} />

      <h2>Profile Summary</h2>
      <input type="t" value={cvData.profile} />
    </div>
  )
}

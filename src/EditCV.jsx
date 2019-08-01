import React, { useContext, useState } from 'react'
import * as App from './App'

export default function EditCV() {

  const cv = useContext(App.CVContext)
  const [cvData, setCvData] = useState(cv)

  const onChange = (e) => {
    const key = e.target.name
    const value = e.target.value
    setCvData({...cvData, [key] : value})
  }


  return (
    <div className="edit-form">
      <h1>Edit Your CV</h1>
      <label htmlFor="name">Name: </label>
      <input  type="text" name="name" id="" value={cvData.name} onChange={onChange} />
      <label htmlFor="profession">Profession: </label>
      <input type="text" name="profession" id="" value={cvData.profession} onChange={onChange} />
      <label htmlFor="email">Email: </label>
      <input type="email" name="email" id="" value={cvData.contacts.email} onChange={onChange} />

      <h2>Profile Summary</h2>
      <textarea value={cvData.profile} onChange={onChange} />
    </div>
  )
}

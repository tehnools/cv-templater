import React, { useContext } from 'react'
import * as App from './App'

export default function Cv() {

  const cv = useContext(App.CVContext)

  function renderExperience() {
    return cv.exprience.map(exp => (
      <div className="paragraph">
        <h3>{exp.title}</h3>
        <p>{exp.text}</p>
      </div>
    ))
  }
  function renderEducation() {
    return cv.education.map(edu => (
      <div className="paragraph">
        <h3>{edu.title}</h3>
        <p>{edu.text}</p>
      </div>
    ))
  }

  return (
    <>

      <div className="App-header">
        <h1>{cv.name}</h1>
        <span>{cv.profession}</span>
      </div>
      <div className="cv">
        <div className="col1">
          {cv.exprience.length > 0 &&
            <div className="paragraph">
              <h2>Experience</h2>
              {renderExperience()}
            </div>
          }

          {cv.education.length > 0 &&
            <div className="paragraph">
              <h2>Educaion</h2>
              {renderEducation()}
            </div>
          }
        </div>
        <div className="col2">
          <h3>Details</h3>
          {cv.contacts ?
            (
              <div className="paragraph">
                <p> Email: {cv.contacts.email}</p>
                <p>Mobile: {cv.contacts.mobile}</p>
              </div>

            )
            : (<p>Please Fill In</p>)}
          <div className="paragraph">
            <h3>Links</h3>
            <p>Available upon Request</p>
          </div>
          <div className="paragraph">
            <h3>Tech Skills</h3>
            <p>Available upon Request</p>
          </div>
          <div className="paragraph">
            <h3>Soft Skills</h3>
            <p>Available upon Request</p>
          </div>
          <div className="paragraph">
            <h3>Hobbies</h3>
            <p>Available upon Request</p>
          </div>
          <div className="paragraph">
            <h3>Languages</h3>
            <p>Available upon Request</p>
          </div>
        </div>
      </div>
    </>
  )
}

import React, { useState } from 'react';
import './App.css';
import Cv from './Cv'
import EditCV from './EditCV'

const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`
const data = {
  name: "Noel Soong",
  profession: "Web Developer",
  contacts: {
    email: "noelsoongdev@gmail.com",
    mobile: "+64 0273462997"
  },
  profile: lorem,
  exprience: [
    {
      title: "Experience 1",
      from: 1243321,
      to: 4321412,
      text: lorem
    },
    {
      title: "Experience 2",
      from: 1243321,
      to: 4321412,
      text: lorem
    },
    {
      title: "Experience 3",
      from: 1243321,
      to: 4321412,
      text: lorem
    },
    {
      title: "Experience 4",
      from: 1243321,
      to: 4321412,
      text: lorem
    },
  ],
  education: [
    {
      title: "Education 1",
      from: 1243321,
      to: 4321412,
      text: lorem
    },
    {
      title: "Education 2",
      from: 1243321,
      to: 4321412,
      text: lorem
    },
  ],
  references: []
}

export const CVContext = React.createContext(data)

function App() {

  const [showPreview, setShowPreview] = useState(false)

  return (
    <div className="App">
     {
       showPreview ? <Cv/> : <EditCV/>
     }
    </div>
  );
}

export default App;

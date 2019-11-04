import React from 'react';

// Styles
import './index.scss';

interface PersonaProps {
  persona: {
    photo: string,
    name: string,
    desc: string
  }
}

const Persona = ({persona}: PersonaProps) => {
  return (
    <div className="persona">
      <div className="persona__avatar" style={{ backgroundImage: `url(${persona.photo})` }}/>
      <span className="persona__name">{persona.name}</span>
      <span className="persona__desc">{persona.desc}</span>
    </div>
  )
}

export default Persona;
import React from 'react';

// Styles
import './index.scss';
import { PersonasIcons } from '../../constants/Data';

// Icons
const artIcon = require('../../icons/art.svg');
const musicIcon = require('../../icons/music.svg');
const photoIcon = require('../../icons/photo.svg');
const travelIcon = require('../../icons/travel.svg');

interface PersonaProps {
  persona: {
    photo: string,
    name: string,
    desc: string,
    icon: PersonasIcons,
  }
}

const iconsColors = {
  [PersonasIcons.ART]: '#19d4ca',
  [PersonasIcons.MUSIC]: '#ff4e50',
  [PersonasIcons.PHOTO]: '#ffa710',
  [PersonasIcons.TRAVEL]: '#667df3',
}

const icons = {
  [PersonasIcons.ART]: artIcon,
  [PersonasIcons.MUSIC]: musicIcon,
  [PersonasIcons.PHOTO]: photoIcon,
  [PersonasIcons.TRAVEL]: travelIcon,
}

const Persona = ({persona}: PersonaProps) => (
  <div className="persona">
    <div className="persona__avatar" style={{ backgroundImage: `url(${persona.photo})` }}>
      <span className={`persona__icon ${persona.icon}`} style={{ backgroundColor: iconsColors[persona.icon]}}>
        <img src={icons[persona.icon]} />
      </span>
    </div>
    <span className="persona__name">{persona.name}</span>
    <span className="persona__desc">{persona.desc}</span>
  </div>
);

export default Persona;
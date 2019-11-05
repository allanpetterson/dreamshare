import React from 'react';

// Components
import Button from '../../components/Button';
import Persona from '../../components/Persona';

// Constants
import { Dictionary, Personas } from '../../constants/Data';
import Section from '../../components/Section';

const PersonasContainer = () => {
  return (
    <Section title={
      Dictionary.PERSONAS_TITLE
    }
      items={
        Personas.map((persona, i) => {
          return (
            <Persona persona={persona} key={i}/>
          )
        })
      }>
      <Button color="primary" variant="outlined">
        {
          Dictionary.PERSONAS_BUTTON
        }</Button>
    </Section>
  )
}

export default PersonasContainer;

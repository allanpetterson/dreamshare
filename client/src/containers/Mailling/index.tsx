import React from 'react';

// Constants
import { Dictionary } from '../../constants/Data';

// Components
import Mailling from '../../components/Mailling';
import Section from '../../components/Section';

const MaillingContainer = () => {
  return (
    <Section title={
      Dictionary.MAILLING_TITLE
    }>
      <Mailling />
    </Section>
  )
}

export default MaillingContainer;

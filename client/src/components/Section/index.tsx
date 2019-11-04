import React, {ReactChildren} from 'react';

interface SectionProps {
    title: string;
    children?: React.ReactNode;
    items?: React.ReactNode;
}

const Section = ({title, children, items} : SectionProps) => <div className="section">
    <span className="section__title">
        {title} </span>
    <div className="section__items">
        {items} </div>
    {children} </div>

export default Section;

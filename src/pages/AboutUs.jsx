import React from 'react';
import TextImageComponent from '../components/TextImageComponent';
import data from './data.json'; 

const AboutUs = () => {
  return (
    <div className='m-16 mx-28 mt-36'>
      {data.sections.map((section, index) => (
        <TextImageComponent
          key={index}
          text={section.text}
          image={section.image}
          imageFirst={index % 2 === 0} // Alternate between image first and text first
        />
      ))}
    </div>
  );
};

export default AboutUs;

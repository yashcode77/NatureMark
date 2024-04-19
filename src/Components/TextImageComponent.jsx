import React from 'react';

const TextImageComponent = ({ text, image, imageFirst }) => {
  return (
    <div className="section-container flex flex-col md:flex-row">
      <div className={`columns image h-72 md:w-1/2 md:${imageFirst ? 'order-1' : 'order-2'}`} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        &nbsp;
      </div>
      <div className={`columns content md:w-1/2 flex flex-col justify-center md:${imageFirst ? 'order-2' : 'order-1'}`}>
        <div className="content-container p-4">
          <h5 className="text-xl font-bold mb-2 text-center">{text.title}</h5>
          {text.paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 text-center">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextImageComponent;

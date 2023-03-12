import React from 'react';
import CV from '../../assets/Rasif Taghizade Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a target="_blank" href={'https://drive.google.com/drive/folders/1OsysswxHzO1F_XoXStos442relK1nTl-?usp=share_link'} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;

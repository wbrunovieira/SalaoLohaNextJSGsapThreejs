import React from 'react';

const Whatsapp: React.FC = () => {
  return (
    <>
      <a
        href='https://wa.me/+5511942124242'
        className='whatsapp-float'
        target='_blank'
      >
        <div className='whatsapp-message-box d-none d-md-flex '>
          <lord-icon
            src='https://cdn.lordicon.com/kiynvdns.json'
            trigger='hover'
            stroke='light'
            colors='primary:#121331,secondary:#f28ba8,tertiary:#ffc738,quaternary:#30e849,quinary:#ebe6ef'
            className='z-20 icon-zap'
          ></lord-icon>
          <div className='whatsapp-text'>
            <p className=''>Oi !</p>
            <p className=''>Podemos te ajudar? </p>
          </div>
        </div>
        <i className='fab fa-whatsapp whatsapp-icon'></i>
      </a>
    </>
  );
};

export default Whatsapp;

import React from 'react';
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';
import gsap from 'gsap';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContatoComp: React.FC = () => {
  useIsomorphicLayoutEffect(() => {
    gsap.to('html', {
      duration: 2,
      delay: 1,
      backgroundColor: 'white',

      ease: 'power1.in',
      opacity: 0.9,
    });
  }, []);

  return (
    <main className='max-w-6xl mx-auto px-4 font-sans'>
      <div className='flex flex-col md:flex-row'>
        <div className='flex flex-1 flex-col text-base text-left w-full md:w-1/2 index-contato'>
          <h6 className='text-3xl text-color font-semibold mb-12 mt-4 pt-7'>
            Salão Loha
          </h6>

          <p className='pr-10 text-left text-sm'>
            Envolva-se na atmosfera acolhedora do Salão Loha, onde cada
            atendimento é uma experiência personalizada e exclusiva. Com
            profissionais altamente qualificados e atualizados com as últimas
            tendências da beleza, nos dedicamos a proporcionar resultados
            excepcionais em todos os serviços. Seja o cabelo revitalizado,
            cuidando das unhas, ou transformando o olhar com design de
            sobrancelhas, no Salão Loha você descobre a beleza em sua essência.
            Aqui, a beleza e bem-estar caminham de mãos dadas. Agende sua visita
            e sinta a diferença de um cuidado que vai além da estética
          </p>

          <h2 className='text-lg text-cor-texto font-semibold mb-7 pt-7'>
            Redes sociais
          </h2>
          <ul className='flex mt-4'>
            <li className='p-0 m-0'>
              <a
                className='social '
                href='https://www.instagram.com/salaoloha/'
              >
                <i className='fab fa-instagram'></i>
              </a>
            </li>

            <li>
              <a className='social' href='https://www.facebook.com/salaoloha/'>
                <i className='fab fa-facebook'></i>
              </a>
            </li>

            <li>
              <a
                className='social'
                href='https://www.tiktok.com/@lohacabeleireiros'
              >
                <i className='fab fa-tiktok'></i>
              </a>
            </li>
          </ul>
        </div>

        <div className='flex flex-col flex-1  w-full md:w-1/2 pr-10 mt-7'>
          {/* Conteúdo do lado direito */}
          <div className='flex flex-col justify-center items-center'>
            {/* Icone do WhatsApp */}
            <div className='flex justify-center items-center'>
              <lord-icon
                src='https://cdn.lordicon.com/tdtlrbly.json'
                trigger='hover'
                stroke='light'
                className='z-20 icon-zap'
                state='hover-jump-roll'
                colors='primary:#121331,secondary:#e83a30'
              />
              <p className='text-sm p-1 font-extralight '>
                <b className='font-semibold'>Endereço: </b>Rua Dona Primitiva
                Vianco, n°100 - lj 08 -
              </p>
              <p className='text-sm'>Centro - Osasco - SP</p>
              {/* Endereço e informações de contato */}
            </div>
            {/* Links para mapas */}
            <div className='flex mb-4 text-[10px] divide-x'>
              {/* Link Waze */}
              <div className='flex mb-4 text-[10px] divide-x'>
                <a
                  className='p-2 mr-2 hover:text-cyan-400 z-20'
                  href='https://www.waze.com/en/live-map/directions/br/sp/r.-dona-primitiva-vianco,-100?place=ChIJA576wBr_zpQRFk1Cx4OwDoc'
                  target='_blank'
                >
                  <i className='fa-brands fa-waze p-2 text-cyan-400 divide-y-2 '></i>
                  Abrir no Waze
                </a>

                <a
                  className='p-2 hover:text-cor-primaria-light z-20'
                  href='https://www.google.com/maps/place/R.+Dona+Primitiva+Vianco,+100+-+Centro,+Osasco+-+SP,+06016-000/@-23.5291209,-46.778259,17z/data=!3m1!4b1!4m6!3m5!1s0x94ceff1ac7675ad3:0xa9485f485a1ea5eb!8m2!3d-23.5291209!4d-46.7756841!16s%2Fg%2F11c2f_9_r4?entry=ttu'
                  target='_blank'
                >
                  <i className='fa-brands fa-google p-2 text-cor-primaria-light'></i>
                  Abrir no Google Maps
                </a>
              </div>
              {/* Link Google Maps */}
            </div>
            {/* Mapa Google Maps incorporado */}
            <div
              className='flex border-spacing-2 border-cor-primaria  border-2 '
              id='location'
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0940113875977!2d-46.77825902467087!3d-23.529120878822003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff1ac7675ad3%3A0xa9485f485a1ea5eb!2sR.%20Dona%20Primitiva%20Vianco%2C%20100%20-%20Centro%2C%20Osasco%20-%20SP%2C%2006016-000!5e0!3m2!1sen!2sbr!4v1704808937720!5m2!1sen!2sbr'
                width='600'
                height='450'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContatoComp;

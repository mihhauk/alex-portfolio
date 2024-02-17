import { useEffect, useRef, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import clx from 'classnames';

import logo from '../src/assets/Axdt-Logo-White.svg';
import portrait from '../src/assets/A-berlin-cape-1.webp';
import photo1 from '../src/assets/photo-1.png';
import photo2 from '../src/assets/photo-2.png';
import photo3 from '../src/assets/photo-3.png';
// import { Section } from './Section';
import throttle from 'lodash/throttle';
import Menu from './Menu';
import { ContactForm } from './ContactForm';
import { Card } from './components/ui/card';
import { OfferCard } from './OfferCard';

function App() {
  const headerRef = useRef(null);

  const [scale, setScale] = useState(true);

  useEffect(() => {
    // if (window.scrollY > 50) {
    //   setScale(true);
    // } else {
    //   setScale(false);
    //   ``;
    // }
    // const debouncedFunction = debounce(originalFunction, waitMilliseconds, options);
    const handleScroll = throttle(() => {
      if (!headerRef.current) return;

      if (window.scrollY > window.innerHeight / 2) {
        setScale(true);
      } else {
        setScale(false);
        ``;
      }
      // Perform actions on scroll
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="home" className="mx-auto max-w-screen-xl">
      <header className={clx('h-0 sticky top-0')}>
        <div
          className={clx(
            'grid grid-cols-2 h-32 justify-between pt-5 px-10 transition duration-1000',
            {
              'bg-gray-950 border-b-2 border-gray-900': scale,
              // 'grid-cols-2': scale,
              // 'grid-cols-1 h-screen': !scale,
            }
          )}
        >
          {/* <div
            className={clx(
              'px-20 absolute top-0 right-0 w-full h-screen'

              // {
              //   'scale-[0.2]': scale,
              //   // 'align-top': scale,
              //   // 'scale-[0.2] scale-x-[0.5] -translate-y-[46%] -translate-x-1/3 ':
              //   //   scale,
              //   // 'scale-75 scale-x-150': !scale,
              // }
            )}
          > */}
          <ScrollIntoView
            selector="#home"
            className={clx({
              'opacity-0': !scale,
              // 'scale-[2] md:scale-[5] translate-y-[40vh]': !scale,
              // 'cursor-pointer': scale,
              // 'align-top': scale,
              // 'scale-[0.2] scale-x-[0.5] -translate-y-[46%] -translate-x-1/3 ':
              //   scale,
              // 'scale-75 scale-x-150': !scale,
            })}
          >
            <img
              src={logo}
              alt="logoo"
              ref={headerRef}
              className={clx(
                'h-24 transition duration-1000',

                {
                  // 'row-start-2': !scale,
                  // 'scale-[2] md:scale-[5]': !scale,
                  // 'cursor-pointer': scale,
                  // 'align-top': scale,
                  // 'scale-[0.2] scale-x-[0.5] -translate-y-[46%] -translate-x-1/3 ':
                  //   scale,
                  // 'scale-75 scale-x-150': !scale,
                }
              )}
            ></img>
          </ScrollIntoView>
          <Menu scale={scale} />
        </div>
        {/* </div> */}
      </header>
      {/* class="bg-[url('/img/hero-pattern.svg')]" */}
      <div
        className={`h-screen bg-home-page bg-no-repeat bg-cover bg-center flex justify-center`}
      >
        <img
          src={logo}
          alt="logoo"
          className={clx(
            'w-1/2 h-full',

            {
              // 'row-start-2': !scale,
              // 'scale-[2] md:scale-[5]': !scale,
              // 'cursor-pointer': scale,
              // 'align-top': scale,
              // 'scale-[0.2] scale-x-[0.5] -translate-y-[46%] -translate-x-1/3 ':
              //   scale,
              // 'scale-75 scale-x-150': !scale,
            }
          )}
        ></img>
        {/* <span className="text-lg p-10 w-2/3 text-slate-500 mb-40">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum a
          necessitatibus aut magnam inventore perferendis, expedita dignissimos,
          possimus ducimus cum mollitia id ab facere rerum aliquid, cumque ullam
          sequi consequatur.
        </span>
        <img
          src={portrait}
          alt="portrait"
          ref={headerRef}
          className={clx(
            //todo: shadow
            'mb-10 mx-10 h-2/3 flex justify-center transition duration-[0.5s]  delay-500 origin-bottom object-contain rounded-md',
            // 'translate-x-[200%] translate-y-[200%]',
            {
              // 'opacity-0': scale,
              // 'scale-[0.2] scale-x-[0.5] -translate-y-[46%] -translate-x-1/3 ':
              //   scale,
              // 'scale-75 scale-x-150': !scale,
            }
          )}
        ></img> */}
      </div>
      <div id="mission" className="flex flex-col mb-40 mt-10">
        <h2 className="mx-auto text-8xl text-slate-100">Why Dramaturgy?</h2>
        <p className="text-3xl text-slate-300 mt-10 mx-20 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa aut rem
          sequi cumque odio, blanditiis, cupiditate ab optio dolores inventore
          ducimus quia veniam fugit, iusto quisquam maiores harum explicabo
          saepe. Aspernatur a deserunt blanditiis, laborum impedit asperiores
          earum debitis aliquid error perspiciatis ut ratione? Magnam voluptatum
          asperiores esse, delectus maxime nam tempora obcaecati aspernatur
          dolorum excepturi voluptatem ut! Impedit, maxime.
        </p>
      </div>
      <div id="offer" className="flex flex-col mb-5">
        <h2 className="mx-auto text-8xl text-slate-100">My offer</h2>
        <div className="grid lg:grid-cols-3 gap-10 p-10">
          <OfferCard
            title="Resolution based"
            price="$100 per session"
            photo={photo1}
            className="lg:mb-10"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            eaque suscipit omnis cupiditate consectetur minima reprehenderit
            adipisci autem, eius blanditiis eveniet nostrum quibusdam commodi.
            Reiciendis maxime laborum consequuntur obcaecati doloribus.
          </OfferCard>
          <OfferCard
            title="Project based"
            price="$1000 per something"
            photo={photo2}
            className="lg:mt-10"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            eaque suscipit omni minima reprehenderit adipisci autem, eius
            blanditiis evenmodi. Reiciendis maxime laborum consequuntur
            obcaecati doloribus.
          </OfferCard>
          <OfferCard
            title="Time based"
            price="$20 per hour"
            photo={photo3}
            className="lg:mb-10"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            eaque suscipit omnis cuuntur obcaecati doloribus.
          </OfferCard>
        </div>
      </div>

      {/* <Section title="section-1" color="via-red-950"></Section>
      <Section invert title="section-2" color="via-amber-950"></Section>
      <Section title="section-3" color="via-red-950"></Section> */}
      <div
        id="contact"
        className="grid lg:grid-cols-2 auto-rows-min gap-10 p-20 h-1/2"
      >
        <Card>
          <img
            src={portrait}
            alt="portrait"
            ref={headerRef}
            className={clx('h-full w-full')}
          ></img>
        </Card>
        <ContactForm />
      </div>

      <footer className="flex justify-end p-4">
        <span className="text-white">
          * All images on the site are mine and only mine!!! Blan, balah
        </span>
      </footer>
    </div>
  );
}

export default App;

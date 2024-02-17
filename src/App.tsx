import { useEffect, useRef, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import clx from 'classnames';

import logo from '../src/assets/Axdt-Logo-White.svg';
import portrait from '../src/assets/A-berlin-cape-1.webp';
import { Section } from './Section';
import throttle from 'lodash/throttle';
import Menu from './Menu';
import { ContactForm } from './ContactForm';

function App() {
  const headerRef = useRef(null);

  const [scale, setScale] = useState(window.scrollY > 50);

  useEffect(() => {
    // const debouncedFunction = debounce(originalFunction, waitMilliseconds, options);
    const handleScroll = throttle(() => {
      if (!headerRef.current) return;

      if (window.scrollY > 50) {
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
          className={clx('flex justify-between items-start pt-10 bg-gray-950', {
            'border-b-2 border-gray-900': scale,
          })}
        >
          <ScrollIntoView
            selector="#home"
            className={clx(
              'cursor-pointer mx-40 flex align-top h-32 transition duration-[1.5s]',
              // 'translate-x-[200%] translate-y-[200%]',
              {
                'translate-x-[30%] translate-y-[70%] scale-[250%]': !scale,
                // 'scale-[0.2] scale-x-[0.5] -translate-y-[46%] -translate-x-1/3 ':
                //   scale,
                // 'scale-75 scale-x-150': !scale,
              }
            )}
          >
            <img src={logo} alt="logoo" ref={headerRef}></img>
          </ScrollIntoView>
          <Menu scale={scale} />
        </div>
      </header>
      <div className={`h-screen flex items-end`}>
        <span className="text-lg p-10 w-2/3 text-slate-500 mb-40">
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
        ></img>
      </div>

      <Section title="section-1" color="via-red-950"></Section>
      <Section invert title="section-2" color="via-amber-950"></Section>
      <Section title="section-3" color="via-red-950"></Section>
      <div className="grid grid-cols-2 auto-rows-min gap-10 p-20 h-1/2">
        <ContactForm />
        <div className="max-h-min">
          <img
            src={portrait}
            alt="portrait"
            ref={headerRef}
            className={clx('h-full w-full object-contain rounded-md')}
          ></img>
        </div>
      </div>

      <footer className="flex">FOOTER</footer>
    </div>
  );
}

export default App;

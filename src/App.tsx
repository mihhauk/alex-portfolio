import { useEffect, useRef, useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import clx from 'classnames';

import logo from '../src/assets/alex-loogo-PhotoRoom.png';
import { Section } from './Section';
import throttle from 'lodash/throttle';

function MenuItem({
  children,
  selector,
  color,
}: {
  children: string;
  selector: string;
  color: string;
}) {
  return (
    <ScrollIntoView selector={selector}>
      <button
        className={`text-5xl font-semibold text-${color}-900 hover:text-${color}-700 hover:scale-110 transition duration-150 ease hover:underline`}
      >
        {children}
      </button>
    </ScrollIntoView>
  );
}

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const headerRef = useRef(null);

  const [scale, setScale] = useState(false);

  useEffect(() => {
    // const debouncedFunction = debounce(originalFunction, waitMilliseconds, options);
    const handleScroll = throttle(() => {
      if (!headerRef.current) return;

      if (window.scrollY > window.innerHeight / 2.6) {
        setScale(true);
      } else {
        setScale(false);
      }
      // Perform actions on scroll
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="mx-auto">
      <div className="fixed top-0 flex justify-between">
        <ScrollIntoView
          selector="#home"
          className={clx(
            'cursor-pointer m-8 flex align-top w-1/2 h-screen translate-x-72 transition duration-[1.5s]',
            {
              'scale-[0.2] scale-x-[0.5] -translate-y-[46%] -translate-x-48  ':
                scale,
              'scale-75 scale-x-150': !scale,
            }
          )}
        >
          <img src={logo} alt="logoo" ref={headerRef}></img>
        </ScrollIntoView>

        <div
          className={clx('m-8 lg:flex w-100 transition duration-[2s]', {
            'lg:scale-[0.4] lg:-translate-y-72 lg:translate-x-32': scale,
            'scale-100': !scale,
            hidden: !drawerOpen,
            'fixed right-0': drawerOpen,
          })}
        >
          <div className={`flex-col flex gap-y-10`}>
            <div className="lg:hidden flex justify-end">
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="-m-2.5 rounded-md text-red-900 justify-end"
              >
                <svg
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <MenuItem selector="#section-1" color="red">
              Sessions
            </MenuItem>
            <MenuItem selector="#section-2" color="amber">
              Help with your project
            </MenuItem>
            <MenuItem selector="#section-3" color="red">
              My other charms
            </MenuItem>
          </div>
        </div>

        <div className="flex justify-end pe-5 pt-10 h-10 lg:hidden">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className={clx(
              '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-700',
              {
                hidden: drawerOpen,
              }
            )}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="home" className={`m-8 h-screen`}>
        <div className="h-screen flex items-start p-20 w-1/2 max-con">
          <span className="text-7xl text-slate-500 ">HERE HERE,</span>
          <span className="text-7xl text-slate-500">Come to me...</span>
        </div>
        <nav
          className="hidden lg:flex w-2/5 items-start justify-end p-6 lg:px-8"
          aria-label="Global"
        >
          <div></div>
        </nav>
      </div>

      <Section title="section-1" color="red-900"></Section>
      <Section invert title="section-2" color="amber-900"></Section>
      <Section title="section-3" color="red-900"></Section>

      <footer className="flex h-40">
        <h2 className="text-red-700">CONTACT ME</h2>
      </footer>
    </header>
  );
}

export default App;

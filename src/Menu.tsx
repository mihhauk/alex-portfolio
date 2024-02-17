import { useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import clx from 'classnames';

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
    <ScrollIntoView selector={selector} scrollOptions={{ block: 'center' }}>
      <button
        className={`text-xl font-semibold menu-item ${color} text-white hover:opacity-70 hover:scale-110 transition duration-150 ease`}
      >
        {children}
      </button>
    </ScrollIntoView>
  );
}

function Menu({ scale }: { scale: boolean }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="justify-self-end">
      <nav
        className={clx('mt-4 mb-2 lg:flex w-100 text-right', {
          hidden: !drawerOpen,
          'fixed right-0': drawerOpen,
        })}
      >
        <div className={`flex-col flex gap-y-2 items-end`}>
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
          <div
            className={clx('transition duration-[1.5s]', {
              'scale-[200%] translate-y-[100%] -translate-x-[100%]': !scale,
            })}
          >
            <MenuItem selector="#mission" color="blue">
              Dramaturgy
            </MenuItem>
            <MenuItem selector="#offer" color="green">
              My offer
            </MenuItem>
            <MenuItem selector="#contact" color="red">
              Contact me
            </MenuItem>
          </div>
        </div>
      </nav>

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
  );
}

export default Menu;

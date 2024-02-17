import { useState } from 'react';
import ScrollIntoView from 'react-scroll-into-view';
import clx from 'classnames';

function MenuItem({
  children,
  selector,
  color,
  onClick,
}: {
  children: string;
  selector: string;
  color: string;
  onClick: () => void;
}) {
  return (
    <ScrollIntoView selector={selector} onClick={onClick}>
      <button
        className={`text-xl font-semibold px-2 menu-item ${color} text-white hover:opacity-70 hover:scale-110 transition duration-150 ease`}
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
        className={clx('mt-4 mb-2 lg:flex w-100', {
          // 'fixed right-0': drawerOpen,
        })}
      >
        <div className="flex justify-end pe-5 pt-10 h-10 lg:hidden">
          <button
            type="button"
            onClick={() => setDrawerOpen((open) => !open)}
            // className="rounded-md text-red-900"
            className={clx(
              '-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-red-700'
              // {
              //   hidden: drawerOpen,
              // }
            )}
          >
            {drawerOpen ? (
              <>
                <span className="sr-only">Close main menu</span>
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
              </>
            ) : (
              <>
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
              </>
            )}
          </button>
          )
        </div>
        <div
          className={clx(`flex flex-col justify-start gap-y-2 lg:flex`, {
            hidden: !drawerOpen,
          })}
        >
          <div
            className={clx('transition duration-[1.5s] origin-right', {
              'scale-[200%] translate-y-[100%]': !scale || drawerOpen,
              'bg-gray-950 border-gray-900 border-b-2': scale && drawerOpen,
            })}
          >
            <MenuItem
              selector="#mission"
              color="blue"
              onClick={() => setDrawerOpen(false)}
            >
              Dramaturgy
            </MenuItem>
            <MenuItem
              selector="#offer"
              color="green"
              onClick={() => setDrawerOpen(false)}
            >
              My offer
            </MenuItem>
            <MenuItem
              selector="#contact"
              color="red"
              onClick={() => setDrawerOpen(false)}
            >
              Contact me
            </MenuItem>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Menu;

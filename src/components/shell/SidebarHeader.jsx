import className from 'classnames';

import { ToggleMenuButton } from '@/components/button/ToggleMenuButton';
import useMenu from '@/components/hooks/useMenu';

import { Sidebar } from './Sidebar';

const SidebarHeader = (props) => {
  const { showMenu, handleToggleMenu, handleClose } = useMenu();

  const clickableBgClass = className(
    'fixed',
    'w-full',
    'h-full',
    'z-40',
    'inset-0',
    'bg-black',
    'opacity-50',
    'cursor-default',
    {
      hidden: !showMenu,
    },
    'lg:hidden'
  );

  return (
    <div className="flex h-screen text-gray-600 antialiased">
      <button
        className={clickableBgClass}
        onClick={handleClose}
        aria-label="Close"
        type="button"
        tabIndex={-1}
      />

      <Sidebar
        show={showMenu}
        topLinks={props.topLinks}
        bottomLinks={props.bottomLinks}
      />

      <div className="flex flex-1 flex-col overflow-hidden bg-white">
        <header className="flex h-16 items-center justify-between bg-white p-3 sm:px-5 lg:px-6 border-b border-gray-200">
          <div className="mr-2 lg:hidden">
            <ToggleMenuButton onClick={handleToggleMenu} />
          </div>

          <div className="text-lg font-bold text-gray-900">{props.title}</div>

          <div className="ml-auto">{props.leftContent}</div>
        </header>

        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="py-8">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export { SidebarHeader };

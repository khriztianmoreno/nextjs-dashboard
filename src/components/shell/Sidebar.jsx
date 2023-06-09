import className from 'classnames';

import { Logo } from '@/template/Logo';

const Sidebar = (props) => {
  const sidebarClass = className(
    'w-64',
    'inset-y-0',
    'left-0',
    'z-50',
    'bg-gray-100',
    'overflow-y-auto',
    'py-8',
    'px-3',
    'flex',
    'flex-col',
    'border-b',
    'border-gray-200',
    'fixed',
    'lg:static',
    'transition',
    'duration-300',
    'ease-in-out',
    'transform',
    {
      'translate-x-0': props.show,
      '-translate-x-full': !props.show,
    },
    'lg:translate-x-0',
  );

  return (
    <div className={sidebarClass}>
      <Logo />

      <div className="mt-10 flex-1">{props.topLinks}</div>

      <div>{props.bottomLinks}</div>
    </div>
  );
};

export { Sidebar };

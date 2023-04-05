const SidebarLink = (props) => (
  <div className="sidebar-link flex items-center rounded-lg p-2 text-lg font-semibold text-gray-800 hover:bg-primary-200 mb-2">
    <div className="stroke-2 stroke-current text-primary-500 h-6 w-6 mr-1; ">
      {props.icon}
    </div>

    {props.children}
  </div>
);

export { SidebarLink };

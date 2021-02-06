type Menu = {
  icon?: string | Array<string>;
  name: string;
  url: string;
  submenu?: Menu[];
  active?: Boolean;
};

export default Menu;

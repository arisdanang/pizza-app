import { useLoaderData } from "react-router-dom";
import { MenuLoaderResponse } from "./menu.loader";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData() as MenuLoaderResponse;
  console.log({ menu });
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};

export default Menu;

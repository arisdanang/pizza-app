import { useLoaderData } from "react-router-dom";
import { MenuLoaderResponse } from "./menu.loader";

const Menu = () => {
  const menu = useLoaderData() as MenuLoaderResponse;

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <li key={pizza.id}>p</li>
      ))}
    </ul>
  );
};

export default Menu;

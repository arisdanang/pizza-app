type Pizza = {
  id: number;
  name: string;
  unitPrice: number;
  ingredients: string[];
  soldOut: boolean;
  imageUrl: string;
};

type MenuItemProps = {
  pizza: Pizza;
};
const MenuItem = ({ pizza }: MenuItemProps) => {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join()}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{unitPrice}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              sold out
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export default MenuItem;

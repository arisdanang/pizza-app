type Item = {
  pizzaId: number;
  name: string;
  quantity: number;
  totalPrice: number;
};

type CartItemProps = {
  item: Item;
};

const CartItem = ({ item }: CartItemProps) => {
  const { pizzaId, name, quantity, totalPrice } = item;
  console.log(pizzaId, name, quantity, totalPrice);
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity} &times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">12000</p>
      </div>
    </li>
  );
};

export default CartItem;

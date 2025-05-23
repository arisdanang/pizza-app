import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 5,
  },
];

const Cart = () => {
  return (
    <div className="px-4 py-3">
      <a>Back to menu</a>

      <h2 className="mt-7 text-xl font-semibold">Your cart, Danang</h2>
      <ul className="mt-3 divide-y divide-stone-200 border">
        {fakeCart.map((item) => (
          <CartItem item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;

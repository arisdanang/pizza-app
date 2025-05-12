const CartOverview = () => {
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>1 pizza</span>
        <span>Rp. 12,000</span>
      </p>
      <div>open cart</div>
    </div>
  );
};

export default CartOverview;

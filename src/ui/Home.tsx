import Button from "./Button";

const Home = () => {
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The Best Pizza <br />
        <span className="text-yellow-500">best pizza ever</span>
      </h1>
      <Button to="menu" type="primary">
        Continue Order, Danang
      </Button>
    </div>
  );
};

export default Home;

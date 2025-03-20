const Home = () => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 w-full flex justify-center font-bold font-mono text-white shadow-text 
      sm:text-2xl md:text-2xl lg:text-3xl xl:text-2xl"
      >
        <div className="p-4 flex-1 text-center">Home</div>
        <div className="p-4 flex-1 text-center">About</div>
        <div className="p-4 flex-1 text-center">Portfolio</div>
        <div className="p-4 flex-1 text-center">Contact</div>
      </div>
      <img
        src="src\assets\images\asdasd.png"
        className="bg-repeat w-full overflow-x-hidden"
        alt="background"
      ></img>
    </div>
  );
};

export default Home;

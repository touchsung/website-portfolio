const Introduction = () => {
  return (
    <section className="flex flex-col gap-4 min-h-screen justify-center container px-mobileContent lg:px-desktopContent py-32 relative z-0">
      <h5 className="text-blue-900 text-heading-5 -mb-4">Hi, my name is</h5>
      <h1 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500 py-2 -mb-3">
        Jettapat Thongsima
      </h1>

      <h1 className="text-blue-800 text-5xl">
        Now I build things for the web.
      </h1>
      <p className="text-blue-900 text-heading-5 max-w-2xl mt-3 leading-10">
        I'm a software developer based in Thailand, I’am coding with a clean and
        beautiful problem solving in mind. Currently.
      </p>
    </section>
  );
};

export default Introduction;

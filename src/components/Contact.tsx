const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-6 min-h-screen justify-center container px-mobileContent lg:px-desktopContent py-40 relative z-0"
    >
      <h2 className=" text-blue-900 text-heading-2 font-semibold -mb-8">
        Get In <span className="text-blue-700">Touch</span>
      </h2>
      <p className=" text-blue-900 text-heading-6 max-w-2xl mt-4 leading-loose text-center">
        Now I’m currently looking for new opportunities, my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you!
      </p>
      <a href="mailto:jettapat.th@gmail.com?subject=Seeking Skilled Developer for Project Collaboration">
        <button className="btn-pushable">
          <span className="text-pushable">Say Hello</span>
        </button>
      </a>
    </section>
  );
};

export default Contact;

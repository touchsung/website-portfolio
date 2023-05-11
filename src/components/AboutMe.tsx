const TECH_STACK = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Node.js",
  "Express.js",
  "Next.js",
  "Golang",
  "Python",
  "MongoDB",
  "PostgresSQL",
];
const AboutMe = () => {
  return (
    <section id="about" className="py-20">
      <section className="social-white bg-blue-800 py-12 pb-40">
        <div className="container text-center text-white px-mobileContent lg:px-desktopContent">
          <h4 className="text-heading-4 pb-5">About Me</h4>
          <p className="text-heading-5 leading-loose">
            Hello! My name is Jettapat and I graduated with a bachelor of food
            and science. My interest in programming languages started back when
            I graduated and I decided to try learning about python by myself
            then I feel good when coding and trying to solve problems it like
            playing puzzle game.
          </p>
        </div>
      </section>
      <section className="container relative -top-36 px-mobileContent lg:px-desktopContent -mb-32">
        <div className="bg-white rounded-lg my-10 py-10 px-5 flex flex-wrap gap-10 justify-center shadow">
          {TECH_STACK.map((item) => (
            <div key={item} className="btn-pushable w-fit">
              <span className="text-pushable">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default AboutMe;

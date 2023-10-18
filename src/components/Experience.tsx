import homeServiceApp from "../assets/img/Home-Service.png";
import foodOrderApp from "../assets/img/Food-Order-App.png";
import populationApp from "../assets/img/Population-Growth.png";
import { FiExternalLink } from "react-icons/fi";
const EXPERIENCES_INFO = [
  {
    name: "CPF",
    position: "Management Trainee",
    duration: "September 2023 - Present",
    website: "https://www.cpfworldwide.com/en/home",
    experiences: [
      "In this role, I led the overhaul of the company's back office systems, optimizing operational efficiency. I assessed existing systems, collaborated with cross-functional teams, and managed a development project that improved processes, resulting in enhanced productivity and streamlined operations.",
      "Collaborating closely with the business team, I analyzed market dynamics and customer behavior to craft and execute targeted marketing strategies. This collaborative effort led to increased brand visibility and higher sales figures as we set and met sales targets, adjusted strategies based on data, and maintained seamless communication between marketing and sales teams.",
    ],
  },
  {
    name: "TechUp",
    position: "Software Developer",
    duration: "December 2022 - August 2023",
    website: "https://www.techupth.com/",
    experiences: [
      "Successfully created and implemented a customized MDX syntax, enhancing the efficiency and readability of code for the development team. This innovation resulted in improved collaboration and accelerated project timelines.",
      "Designed and developed engaging HTML and JavaScript exercises, providing hands-on learning opportunities for students. These exercises effectively enhanced their practical skills and understanding of web development concepts.",
      "Collaborated in leading the development of interactive learning platforms, including code playground, code block, and content creation. These platforms enabled seamless and immersive learning experiences for users, resulting in increased engagement and knowledge retention.",
    ],
  },
];

const PROJECTS_INFO = [
  {
    name: "Population Growth",
    scope: "Front-End Project",
    description:
      "The Population Growth Visualization project is a dynamic and informative web application that utilizes React and Chart.js to display an animated graph depicting the growth of a population over a series of years. This interactive tool is designed to provide users with a visually engaging and easily understandable representation of how a population changes over time.",
    img: populationApp,
    tech_stacks: ["React", "Chart.js"],
    source: "https://github.com/Touchsung/population-growth-per-country",
  },
  {
    name: "Money Note Chatbot",
    scope: "Back-End Project",
    description:
      "Developed a Go language-based API enabling seamless interaction with the Money Note Line application, empowering developers to access and manage user data programmatically. Achievements include retrieving account details, accessing transaction history, and facilitating the creation of transactions.",
    img: "https://innovationm.co/wp-content/uploads/2019/02/line-messaging.png",
    tech_stacks: ["Go", "Line API", "Wit.ai", "PostgreSQL"],
    source: "https://github.com/Touchsung/money-note-line-api-go",
  },
  {
    name: "Home Service Web Application",
    scope: "Full-Stack Project",
    description:
      "A comprehensive project aimed at simplifying and automating various home-related services. It offers a range of features such as maintenance scheduling, bill tracking, and home appliance management, providing homeowners with an efficient and user-friendly platform to streamline their household tasks.",
    img: homeServiceApp,
    tech_stacks: ["React", "Chakra-UI", "Express.js", "PostgreSQL"],
    source: "https://github.com/techupth/home-service",
  },
  {
    name: "Food Order Web Application",
    scope: "Front-End Project",
    description:
      "A project that provides a platform for users to browse and order food from a menu. It likely includes features such as displaying food items, adding items to a cart, and processing orders. ",
    img: foodOrderApp,
    tech_stacks: ["React", "Redux", "Tailwind"],
    source: "https://github.com/Touchsung/Food-Menu-Order",
  },
];

const Experience = () => {
  return (
    <div id="experience" className="py-20 pt-0">
      <section className="flex flex-col gap-4 justify-center container px-mobileContent lg:px-desktopContent relative z-0 py-20 text-gray-900">
        <div className=" flex items-center">
          <h4 className="text-heading-4 text-blue-900 min-w-fit">
            Where I’ve Worked
          </h4>
          <hr className=" bg-blue-900 w-full h-1 rounded ml-10" />
        </div>
        <div>
          {EXPERIENCES_INFO.map((item) => (
            <div key={item.name} className="grid grid-flow-col auto-cols-auto">
              <h5 className="text-heading-5 text-blue-900 w-32">{item.name}</h5>
              <div className="bg-blue-900 w-1 mx-5 h-auto rounded relative before:content-[''] before:h-3 before:w-3 before:bg-blue-900 before:rounded-full before:absolute before:-left-1" />
              <div className="flex flex-col gap-1">
                <div className="text-heading-5 text-blue-700">
                  {item.position}
                  <a
                    href={item.website}
                    className="text-blue-800 ml-2 hover:underline"
                    target="_blank"
                  >
                    @{item.name}
                  </a>
                </div>
                <h5 className="text-heading-5">{item.duration}</h5>
                <ul className=" list-disc ml-8 my-4">
                  {item.experiences.map((experience) => (
                    <li
                      key={experience}
                      className=" text-heading-6 mb-4 leading-relaxed"
                    >
                      {experience}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="social-white bg-blue-800 py-12">
        <div className="container text-center text-white px-mobileContent lg:px-desktopContent">
          <h4 className="text-heading-4 mb-10">Some Things I’ve Built</h4>
          {PROJECTS_INFO.map((project, index) => {
            const isEven = index % 2 === 0;
            {
              return (
                <div
                  key={project.name}
                  className="my_project grid grid-cols-[repeat(12, 1fr)] relative overflow-hidden lg:rounded-none lg:shadow-none mb-10 lg:mb-16 w-full rounded shadow-2xl "
                >
                  <div
                    className={`absolute lg:max-w-xl lg:block hidden max-h-full overflow-hidden ${
                      isEven ? "left-0" : "right-0"
                    }`}
                  >
                    <a href={project.source} target="_blank" rel="noreferrer">
                      <div className=" bg-blue-900 w-full h-full lg:opacity-50 opacity-90 absolute lg:hover:opacity-0 ease-in-out duration-500" />
                      <img src={project.img} alt={`${project.name} Image`} />
                    </a>
                  </div>
                  <div
                    className={`description_project flex flex-col ${
                      isEven ? "lg:items-end" : "lg:items-start"
                    } gap-2 col-span-7 p-8 lg:p-0 items-start bg-white lg:bg-transparent text-blue-900`}
                  >
                    <p className="z-10 text-body-1 lg:text-white">
                      {project.scope}
                    </p>
                    <h1 className=" text-blue-700 lg:text-white text-2xl z-10">
                      {project.name}
                    </h1>
                    <p
                      className={`lg:bg-white text-start bg-none max-w-xl leading-loose lg:leading-relaxed lg:px-6 lg:py-4 lg:rounded lg:shadow-xl my-2 mb-4 ${
                        isEven ? "lg:text-end" : "lg:text-start"
                      } items-start z-10`}
                    >
                      {project.description}
                    </p>
                    <ul
                      className={`flex flex-wrap z-10 w-full gap-3 ${
                        isEven ? "lg:justify-end" : "lg:justify-start"
                      }`}
                    >
                      {project.tech_stacks.map((stack) => {
                        return (
                          <li
                            key={stack}
                            className={`text-body-2 font-medium px-2.5 py-0.5 rounded-full text-blue-700 bg-blue-100`}
                          >
                            {stack}
                          </li>
                        );
                      })}
                    </ul>

                    <a href={project.source} target="_blank" rel="noreferrer">
                      <FiExternalLink className="hover:text-blue-700 ease-in-out lg:mt-0.5 duration-200 lg:text-white text-heading-5 flex gap-3 z-10 absolute top-5 right-5 lg:relative lg:right-0 lg:top-0" />
                    </a>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </section>
    </div>
  );
};

export default Experience;

const EXPERIENCES_INFO = [
  {
    name: "TechUp",
    position: "Software Developer",
    duration: "December 2023 - Present",
    website: "test",
    experiences: [
      "Successfully created and implemented a customized MDX syntax, enhancing the efficiency and readability of code for the development team. This innovation resulted in improved collaboration and accelerated project timelines.",
      "Designed and developed engaging HTML and JavaScript exercises, providing hands-on learning opportunities for students. These exercises effectively enhanced their practical skills and understanding of web development concepts.",
      " Collaborated in leading the development of interactive learning platforms, including code playground, code block, and content creation. These platforms enabled seamless and immersive learning experiences for users, resulting in increased engagement and knowledge retention.",
    ],
  },
];
const Experience = () => {
  return (
    <section className="flex flex-col gap-4 justify-center container px-10 lg:px-desktopContent relative z-0 py-20">
      <div className=" flex items-center">
        <h4 className="text-heading-4 text-blue-900 min-w-fit">
          Where I’ve Worked
        </h4>
        <hr className=" bg-blue-900 w-full h-1 rounded ml-10" />
      </div>
      <div>
        {EXPERIENCES_INFO.map((item) => (
          <div className="flex flex-row gap-4">
            <h5 className="text-heading-5 text-blue-900">{item.name}</h5>
            <div className=" bg-blue-900 w-3 mx-5 h-auto rounded relative before:content-[''] before:h-3 before:w-3 before:bg-blue-900 before:rounded-full before:absolute before:-left-1" />
            <div className="flex flex-col gap-1">
              <h5 className="text-heading-5 text-blue-700">
                {item.position}
                <span className="text-blue-800 ml-2">@{item.name}</span>
              </h5>
              <h5 className="text-heading-5">{item.duration}</h5>
              <ul className=" list-disc ml-8 my-4">
                {item.experiences.map((experience) => (
                  <li className=" text-heading-6 mb-4 leading-relaxed">
                    {experience}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

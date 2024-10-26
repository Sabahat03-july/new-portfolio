const Experience = () => {
    return (
      <section className="py-20 bg-gray-100">
        <h2 className="text-center text-4xl mb-10">My <span className="text-orange-500">Experience</span></h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold">Frontend Developer</h3>
            <p className="text-lg text-gray-600">Tech Company XYZ, 2021 - Present</p>
            <ul className="mt-2 list-disc list-inside">
              <li>Developed user-friendly web applications using React and Next.js.</li>
              <li>Collaborated with designers to implement responsive design principles.</li>
              <li>Optimized applications for maximum speed and scalability.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold">Web Developer Intern</h3>
            <p className="text-lg text-gray-600">ABC Solutions, 2020 - 2021</p>
            <ul className="mt-2 list-disc list-inside">
              <li>Assisted in building and maintaining company websites.</li>
              <li>Learned best practices for HTML, CSS, and JavaScript coding.</li>
              <li>Participated in code reviews and collaborated in agile teams.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold">Freelance Web Developer</h3>
            <p className="text-lg text-gray-600">2019 - 2020</p>
            <ul className="mt-2 list-disc list-inside">
              <li>Worked with various clients to develop and optimize their websites.</li>
              <li>Provided ongoing maintenance and support for web projects.</li>
              <li>Developed custom solutions to meet unique client needs.</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  
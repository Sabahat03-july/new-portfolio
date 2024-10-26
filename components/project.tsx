const Projects = () => {
    return (
        <div id="Project">
      <section className="py-20 bg-gray-100">
        <h2 className="text-center text-4xl mb-10">My <span className="text-orange-500">Projects</span></h2>
        <div className="max-w-4xl mx-auto">
          {/* Number Guessing Game */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold">Number Guessing Game</h3>
            <p className="mt-2">
              A fun and interactive web-based game where players guess a randomly generated number within a specified range.
            </p>
            <p className="text-gray-600 mt-2">Technologies: HTML, CSS, JavaScript</p>
          </div>
          
          {/* Student Management System */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold">Student Management System</h3>
            <p className="mt-2">
              A comprehensive system to manage student records, including adding, updating, and deleting student information.
            </p>
            <p className="text-gray-600 mt-2">Technologies: React, Node.js, MongoDB</p>
          </div>
          
          {/* Console Mark Sheet Calculator */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-2xl font-semibold">Console Mark Sheet Calculator</h3>
            <p className="mt-2">
              A command-line application that calculates and displays student marks and grades based on input scores.
            </p>
            <p className="text-gray-600 mt-2">Technologies: JavaScript (Node.js)</p>
          </div>
        </div>
      </section>
      </div>
    );
  };
  
  export default Projects;
  
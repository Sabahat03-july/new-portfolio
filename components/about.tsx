import Link from "next/link";

const About = () => {
    return (
        <div id="About">
      <section className="flex items-center justify-center p-12 bg-black">
        <div className="text-white ml-10">
          <h2 className="text-4xl">About <span className="text-orange-500">Me</span></h2>
          <h3 className="text-6xl">Frontend <span className="text-orange-500">Developer</span></h3>
          <p className="mt-4 text-lg">
            I am a passionate Frontend Developer with a keen eye for creating responsive and visually appealing websites. I have a strong foundation in HTML, CSS, and JavaScript, and I enjoy working with modern frameworks like React and Next.js.
          </p>
          <p className="mt-4 text-lg">
            My goal is to develop user-friendly applications that provide great user experiences. I love learning new technologies and keeping up with industry trends to continuously improve my skills.
          </p>
          <h4 className="text-2xl mt-6">Skills & Technologies:</h4>
          <ul className="list-disc list-inside mt-2">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Next.js, Tailwind CSS</li>
            <li>Responsive Design, UX/UI Principles</li>
            <li>Version Control (Git)</li>
            <li>APIs and RESTful Services</li>
          </ul>
          <h4 className="text-2xl mt-6">Interests:</h4>
          <p className="mt-2">
            I enjoy exploring new web technologies, contributing to open-source projects, and sharing knowledge with others through blogging and mentoring.
          </p>
          <Link href="/experience" className="bg-orange-500 text-white py-2 px-4 rounded mt-6 inline-block">Experience</Link>
        </div>
      </section>
      </div>
    );
};

export default About;

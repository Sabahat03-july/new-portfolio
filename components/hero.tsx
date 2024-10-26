import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section className="flex items-center justify-between min-h-screen p-12 bg-gray-100">
      <div className="max-w-lg">
        <h3 className="text-4xl">Hi</h3>
        <h1 className="text-6xl leading-tight">
          I’m <span className="text-orange-500">SABAHAT</span>, a Frontend Developer
        </h1>
        <p className="mt-6 text-lg">
          I’m a passionate and dedicated front-end developer with a strong foundation in HTML, CSS, and JavaScript...
        </p>
        <div className="flex gap-4 mt-6">
            <Link href={'/https://github.com/Sabahat03-july'}>
          <button className="bg-black text-white py-2 px-4 rounded">Hire Me</button></Link>
          <Link href="/experience">
            <button className="bg-orange-500 text-white py-2 px-4 rounded">Experience</button>
          </Link>
        </div>
      </div>
      <div>
        <Image src="/sabaat-profile.jpg" alt="Profile" className="w-96 rounded-full" width={384} height={384} />
      </div>
    </section>
  );
};

export default Home;

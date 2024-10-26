import Link from 'next/link';

const Header = () => {
  return (
    <div >
    <header className="fixed top-0 left-0 w-full p-8 bg-black backdrop-blur-md flex justify-between items-center z-100">
      <Link href="#" className="text-white text-2xl font-semibold">
        <span>Saba</span>Hat
      </Link>
      <nav className="space-x-6">
        <Link href="#" className="text-white hover:text-orange-500">Portfolio</Link>
        <Link href="#Service" className="text-white hover:text-orange-500">Services</Link>
        <Link href="#About" className="text-white hover:text-orange-500">About Me</Link>
        <Link href="#Project" className="text-white hover:text-orange-500">Projects</Link>
        <Link href="#Education" className="text-white hover:text-orange-500">Education</Link>
        <Link href="#Contact" className="text-white hover:text-orange-500">Contact</Link>
      </nav>
      <Link href="/" className="bg-lightblue text-black py-2 px-4 rounded">Contact us</Link>
    </header>
    </div>
  );
};

export default Header;

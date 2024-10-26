import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#"><i className="bx bxl-linkedin"></i></a>
          <a href="#"><i className="bx bxl-github"></i></a>
          <a href="#"><i className="bx bxl-facebook-circle"></i></a>
        </div>
        <ul className="flex justify-center space-x-6 mb-4">
          <li><Link href="#">FAQ</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="/about">About Me</Link></li>
          <li><Link href="#">Contact Us</Link></li>
          <li><Link href="#">Privacy Policy</Link></li>
        </ul>
        <p>&copy; 2024 Sabahat | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

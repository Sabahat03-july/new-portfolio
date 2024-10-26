import About from "@/components/about";
import ContactForm from "@/components/contact";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Home from "@/components/hero";
import Projects from "@/components/project";
import Services from "@/components/serviec";

const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services/>
      <Education/>
      <Projects/>
      <ContactForm />
      <Footer />
    </>
  );
};

export default HomePage;

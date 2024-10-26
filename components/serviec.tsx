const Services = () => {
    return (
        <div id="Service">
      <section className="py-20 bg-gray-100">
        <h2 className="text-center text-4xl mb-10">My <span className="text-orange-500">Services</span></h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
            <p className="text-lg">
              I create responsive and user-friendly websites using modern technologies like React and Next.js.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-lg">
              I design intuitive interfaces that enhance user experience, ensuring that your site is not only beautiful but also functional.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">SEO Optimization</h3>
            <p className="text-lg">
              I optimize your website for search engines to improve visibility and attract more visitors.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">E-commerce Solutions</h3>
            <p className="text-lg">
              I build scalable e-commerce platforms that provide a seamless shopping experience for your customers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Content Management</h3>
            <p className="text-lg">
              I implement content management systems that allow you to easily manage and update your website content.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Consulting Services</h3>
            <p className="text-lg">
              I offer consulting services to help you strategize your online presence and achieve your business goals.
            </p>
          </div>
        </div>
      </section>
      </div>
    );
  };
  
  export default Services;
  
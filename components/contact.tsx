const ContactForm = () => {
  return (
      <div id="Contact">
          <section className="py-20">
              <h2 className="text-center text-3xl mb-6">Contact <span className="text-orange-500">Me</span></h2>
              <form className="max-w-xl mx-auto">
                  <div className="flex flex-wrap justify-between">
                      <input type="text" placeholder="Full Name" className="w-full p-4 mb-4 rounded" />
                      <input type="email" placeholder="Enter Your Email" className="w-full p-4 mb-4 rounded" />
                      <input type="number" placeholder="Phone Number" className="w-full p-4 mb-4 rounded" />
                      <input type="text" placeholder="Subject" className="w-full p-4 mb-4 rounded" />
                  </div>
                  <textarea placeholder="Your Message" className="w-full p-4 mb-4 rounded" rows={5}></textarea>
                  <input type="submit" value="Send Message" className="bg-black text-white py-2 px-4 rounded" />
              </form>
          </section>
      </div>
  );
};

export default ContactForm;
np
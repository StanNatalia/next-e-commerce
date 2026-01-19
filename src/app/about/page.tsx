const AboutPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-16">
      <div className="flex flex-col md:flex-row md:gap-10">
        <div className="w-full md:w-1/2 h-[300px] md:h-[500px]">
          <img
            src="https://images.pexels.com/photos/8386669/pexels-photo-8386669.jpeg"
            alt="photo"
            fill
            className="w-full h-full rounded-lg object-cover"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-semibold mb-6">About Us</h1>

          <p className="text-gray-600 mb-4">
            Welcome to <span className="font-medium">LAMA</span> — your modern
            online store for high-quality products and a seamless shopping
            experience.
          </p>

          <p className="text-gray-600 mb-4">
            We focus on clean design, usability, and performance. Our goal is to
            make shopping simple, enjoyable, and accessible for everyone.
          </p>

          <p className="text-gray-600 mb-4">
            Every product in our store is carefully selected to meet high
            standards of quality and reliability. We believe that great products
            should not only look good but also serve a real purpose in everyday
            life.
          </p>

          <p className="text-gray-600 mb-4">
            Our team is constantly working on improving the platform, adding new
            features, and listening to customer feedback to deliver the best
            possible experience.
          </p>

          <p className="text-gray-600">
            Thank you for choosing <span className="font-medium">LAMA</span>.
            We’re happy to have you with us ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

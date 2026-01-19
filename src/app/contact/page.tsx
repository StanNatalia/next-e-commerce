import React from "react";

const ContactPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-16">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="flex-1">
          <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
          <hr className="border-gray-400 mb-12" />
          <h2 className="text-2xl font-medium mb-6">Our Address:</h2>

          <p className="mb-6 font-medium text-2xl">
            <strong>LAMA Store</strong>
          </p>

          <p className="mb-2 text-lg">123 Fashion Street</p>
          <p className="mb-2 text-lg">London, UK</p>
          <p className="mb-4 text-lg">Phone: +38 (099) 123-45-67</p>

          <p className="text-gray-600 text-lg">
            We are open Monday – Friday, 9:00 – 18:00
          </p>
        </div>

        <div className="flex-1 w-full h-[400px] md:h-[500px] lg:h-[600px]  rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408.3029407538939!2d-0.15724034194557854!3d51.51971158338604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acc2157e34f%3A0xc7b22fc38c6c976f!2zNzkgQmFrZXIgU3QsIExvbmRvbiBXMVUgNkFHLCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2sua!4v1768560548327!5m2!1sru!2sua"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

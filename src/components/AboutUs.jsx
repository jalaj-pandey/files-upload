import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 p-6 md:p-12 lg:p-16 rounded-lg shadow-lg">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-6">
          The Financial Document Analyzer streamlines the extraction of key data from unstructured financial documents, such as company annual reports. Simply upload your documents, and our tool will automatically process them using advanced AI models to generate structured data. You can then query the document, allowing you to easily search for specific details and insights.
        </p>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-6">
          Our platform is designed to simplify financial analysis by providing accurate and actionable insights from complex documents. Whether you are a financial analyst, investor, or business owner, our tool helps you save time and make informed decisions with ease.
        </p>
        <p className="text-gray-700 text-base md:text-lg lg:text-xl mb-6">
          With a user-friendly interface and powerful AI capabilities, the Financial Document Analyzer ensures that you get the most relevant information quickly. Stay ahead in the competitive financial landscape with our cutting-edge technology and robust features.
        </p>
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white text-base md:text-lg lg:text-xl py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

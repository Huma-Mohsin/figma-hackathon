"use client";
import React, { useState } from "react";
import { newsData } from "../components/pagination/Newsdata"; // Assuming newsData is imported from a separate file
import { featuredData } from "../components/pagination/FeaturesData"; // Assuming featuredData is imported from a separate file
import Modal from "../components/Modal"; // Importing the Modal component
import Image from "next/image";
import Link from "next/link";

const CombinedPage = () => {
  const itemsPerPage = 5; // Number of items per page for news
  const featuredItemsPerPage = 4; // Number of items per page for featured products
  const [currentNewsPage, setCurrentNewsPage] = useState(1);
  const [currentFeaturedPage, setCurrentFeaturedPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    imageUrl: "",
    paragraph: "",
  });

  // Pagination logic for news
  const indexOfLastNewsItem = currentNewsPage * itemsPerPage;
  const indexOfFirstNewsItem = indexOfLastNewsItem - itemsPerPage;
  const currentNewsItems = newsData.slice(
    indexOfFirstNewsItem,
    indexOfLastNewsItem
  );

  const totalNewsPages = Math.ceil(newsData.length / itemsPerPage);

  // Pagination logic for featured products (4 per page)
  const indexOfLastFeaturedItem = currentFeaturedPage * featuredItemsPerPage;
  const indexOfFirstFeaturedItem =
    indexOfLastFeaturedItem - featuredItemsPerPage;
  const currentFeaturedItems = featuredData.slice(
    indexOfFirstFeaturedItem,
    indexOfLastFeaturedItem
  );

  const totalFeaturedPages = Math.ceil(
    featuredData.length / featuredItemsPerPage
  );

  // Handlers for pagination
  const handleNextNewsPage = () => {
    if (currentNewsPage < totalNewsPages)
      setCurrentNewsPage(currentNewsPage + 1);
  };

  const handlePrevNewsPage = () => {
    if (currentNewsPage > 1) setCurrentNewsPage(currentNewsPage - 1);
  };

  const handleNextFeaturedPage = () => {
    if (currentFeaturedPage < totalFeaturedPages)
      setCurrentFeaturedPage(currentFeaturedPage + 1);
  };

  const handlePrevFeaturedPage = () => {
    if (currentFeaturedPage > 1)
      setCurrentFeaturedPage(currentFeaturedPage - 1);
  };

  const openModal = (title: string, description: string, imageUrl: string, paragraph: string) => {
    setModalContent({ title, description, imageUrl, paragraph });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-500">
        Nike News & Featured Products
      </h1>

      {/* News Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 mt-4">Nike News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
          {currentNewsItems.map((news, index) => (
            <div
              key={index}
              className="bg-white p-4 border rounded-xl shadow-xl"
            >
              <h3 className="text-2xl font-semibold">{news.title}</h3>
              <p className="text-lg">{news.description}</p>
              <Link
                href={news.link}
                className="text-red-400 hover:text-red-500 text-lg"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link behavior
                  openModal(
                    news.title,
                    news.description,
                    news.image || "fallback-image-url.jpg",
                    news.paragraph
                  ); // Open modal
                }}
              >
                Read more...
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination Controls for News */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={handlePrevNewsPage}
           className="bg-gradient-to-r from-green-400 to-green-700 shadow-md  text-white py-2 px-6 rounded-xl hover:bg-gray-700 transition duration-200 mt-2 ml-20"
            disabled={currentNewsPage === 1}>
          
            Previous
          </button>
          <div>
            Page {currentNewsPage} of {totalNewsPages}
          </div>
          <button
            onClick={handleNextNewsPage}
             className="bg-gradient-to-r from-green-400 to-green-700 shadow-md  text-white py-2 px-6 rounded-xl hover:bg-gray-700 transition duration-200 mt-2 ml-20"
            disabled={currentNewsPage === totalNewsPages}
          >
            Next
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 mt-4">Featured Nike Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {currentFeaturedItems.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 border rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                width={500}
                height={500}
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-contain mb-4 rounded-xl"
              />
              <h3 className="text-2xl font-semibold">{product.name}</h3>
              <p className="text-lg">{product.description}</p>
              <p className="text-xl font-bold text-blue-500">{product.price}</p>
              <button className="bg-gradient-to-r from-gray-400 to-gray-700 shadow-md  text-white py-2 px-6 rounded-xl hover:bg-gray-700 transition duration-200 mt-2 ml-20">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Controls for Featured Products */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={handlePrevFeaturedPage}
            className="bg-gradient-to-r from-green-400 to-green-700 shadow-md  text-white py-2 px-6 rounded-xl hover:bg-gray-700 transition duration-200 mt-2 ml-20"
            disabled={currentFeaturedPage === 1}
          >
            Previous
          </button>
          <div>
            Page {currentFeaturedPage} of {totalFeaturedPages}
          </div>
          <button
            onClick={handleNextFeaturedPage}
          className="bg-gradient-to-r from-green-400 to-green-700 shadow-md  text-white py-2 px-6 rounded-xl hover:bg-gray-700 transition duration-200 mt-2 ml-20"
            disabled={currentFeaturedPage === totalFeaturedPages}
          >
            Next
          </button>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        description={modalContent.description}
        imageUrl={modalContent.imageUrl}
        paragraph={modalContent.paragraph}
      />
    </div>
  );
};

export default CombinedPage;

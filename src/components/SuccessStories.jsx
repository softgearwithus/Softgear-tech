import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      category: "E-Commerce",
      title: "Suscel",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob3BwaW5nfGVufDB8fDB8fHww", // put in public folder
    },
    {
      category: "Home Services",
      title: "Bizzio",
      image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMHNlcnZpY2V8ZW58MHx8MHx8fDA%3D", // put in public folder
    },
    {
      category: "Ed-Tech",
      title: "Involvvely",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhY2hpbmd8ZW58MHx8MHx8fDA%3D", // put in public folder
    },
    {
      category: "Social",
      title: "Re-Pli",
      image: "https://images.unsplash.com/photo-1603145733146-ae562a55031e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29jaWFsfGVufDB8fDB8fHww", // put in public folder
    },
  ];

  return (
    <div className="py-12 px-6 md:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Success Stories</h2>
      <p className="text-gray-500 mb-12">
        Creating the future you want - tailored to your business needs.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-shadow"
          >
            <img
              src={story.image}
              alt={story.title}
              className="rounded-lg object-contain w-full h-48 mb-4"
            />
            <p className="text-blue-500">{story.category}</p>
            <h3 className="font-semibold text-lg">{story.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;

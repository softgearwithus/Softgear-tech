import React from "react";

const teamMembers = [
  {
    name: "Sachin Khosla",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1565986829539-cb936ef8805f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvdXQlMjBtYW58ZW58MHx8MHx8fDA%3D", // Replace with actual image path
  },
  {
    name: "Ravi Sharma",
    role: "Chief Operating Officer (COO)",
    img: "https://images.unsplash.com/photo-1565986829539-cb936ef8805f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvdXQlMjBtYW58ZW58MHx8MHx8fDA%3D", // Replace with actual image path
  },
  {
    name: "Anita Verma",
    role: "Chief Technology Officer (CTO)",
    img: "https://images.unsplash.com/photo-1565986829539-cb936ef8805f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvdXQlMjBtYW58ZW58MHx8MHx8fDA%3D", // Replace with actual image path
  },
];

export default function MeetOurTeam() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Meet Our Team</h2>
      <p className="text-gray-600 mb-10">
        Creating exponential value through a cohesive approach.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-60">
            <img
              src={member.img}
              alt={member.name}
              className="w-60 h-60 object-cover rounded-lg shadow-md mx-auto"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

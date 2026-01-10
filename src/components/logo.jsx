import logo1 from "../assets/logos/logo1.jpeg";
import logo2 from "../assets/logos/logo2.jpeg";
import logo3 from "../assets/logos/logo3.jpeg";


const LogoMarquee = () => {
  const companiesLogo = [
    { name: "", logo: logo1 },
    { name: "", logo: logo2 },
    { name: "", logo: logo3 },
   
  ];

  return (
    <>
      {/* Animation CSS */}
      <style>{`
        .marquee-inner {
          animation: marqueeScroll 15s linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <h3 className="text-base text-center text-slate-400 pb-10 font-medium">
        Trusted by leading brands, including —
      </h3>

      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

        {/* Marquee */}
        <div className="flex marquee-inner will-change-transform">
          {[...companiesLogo, ...companiesLogo].map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="mx-12 h-40 w-auto object-contain"
              draggable="false"
            />
          ))}
        </div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      </div>
    </>
  );
};

export default LogoMarquee;

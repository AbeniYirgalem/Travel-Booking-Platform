const Partners = () => {
    return (
      <section className="py-10 bg-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
            Our tour partner
          </h2>
          <p className="text-gray-500 text-sm md:text-base mb-10">
            There are many variation of passage of lorem ipsum available but
            <br />
            the majority have suffered alteration
          </p>
  
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 md:gap-12">
            <a href="#">
              <img src="/image/Katana.png" alt="Katana" className="h-6 md:h-8" />
            </a>
            <a href="#">
              <img src="/image/travava.png" alt="Travava" className="h-6 md:h-8" />
            </a>
            <a href="#">
              <img src="/image/bigui.png" alt="Bigui" className="h-6 md:h-8" />
            </a>
            <a href="#">
              <img src="/image/Booking.com.png" alt="Booking.com" className="h-6 md:h-8" />
            </a>
            <a href="#">
              <img src="/image/Jakmaen.png" alt="Jakmaen" className="h-6 md:h-8" />
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Partners;
  
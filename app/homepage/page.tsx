import React from "react";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className=" min-h-screen flex flex-col">
      {/* First Section */}
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/product1.jpg')" }}
      >
        <div
          className="text-white p-8"
          style={{
            width: "548px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "35px",
          }}
        >
          <h5
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              lineHeight: "24px",
              textAlign: "left",
            }}
            className="mb-0"
          >
            SUMMER 2020
          </h5>
          <h1
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "58px",
              fontWeight: 700,
              lineHeight: "80px",
              letterSpacing: "0.2px",
              textAlign: "left",
              textDecoration: "none",
            }}
            className="mb-0"
          >
            New Collection
          </h1>
          <h4
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "30px",
              letterSpacing: "0.2px",
              textAlign: "left",
              textDecoration: "none",
            }}
            className="text-white mb-0"
          >
            We know how large objects will act, but things on a small scale.
          </h4>
          <button
            className="bg-green-500 text-white py-4 px-10 rounded hover:bg-green-600 text-2xl"
            style={{
              width: "221px",
              height: "62px",
              marginTop: "10px",
            }}
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Second Section */}
    <div className="flex flex-col items-center px-5 w-full bg-neutral-50 max-w-full">
      <div className="text-center">
        <h1 className="font-bold text-3xl">Editors pick</h1>
        <p className="text-[#737373]">Problems trying to resolve the conflict between</p>
      </div>
      
      <div className="flex flex-wrap gap-4 py-20 max-md:flex-col lg:flex-row md:flex-row sm:flex-col">
        
        {/* Men and Women Categories */}
        <div className="flex flex-wrap gap-4 lg:flex-row md:flex-row sm:flex-col flex-col">
          <div className="relative overflow-hidden">
            <Image
              loading="lazy"
              alt="MEN category"
              className="object-cover w-full h-full"
              src="/media bg-cover.png"
              width={500}
              height={500}
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
              MEN
            </div>
          </div>
          
          <div className="relative overflow-hidden">
            <Image
              loading="lazy"
              alt="WOMEN category"
              className="object-cover w-full h-full"
              src="/filter.png"
              width={500}
              height={500}
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
              WOMEN
            </div>
          </div>
        </div>
        
        {/* Accessories and Kids Categories */}
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden">
            <Image
              loading="lazy"
              alt="ACCESSORIES category"
              className="object-cover w-full h-full"
              src="/filter (1).png"
              width={500}
              height={500}
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
              ACCESSORIES
            </div>
          </div>

          <div className="relative overflow-hidden">
            <Image
              loading="lazy"
              alt="KIDS category"
              className="object-cover w-full h-full"
              src="/filter (2).png"
              width={500}
              height={500}
            />
            <div className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black font-semibold uppercase">
              KIDS
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Bestseller Products Section */}
      <div className="bg-white py-12">
        <h4 className="text-center font-montserrat text-gray-500 mb-3">Featured Products</h4>
        <h3 className="text-center text-xl font-semibold mb-6">BESTSELLER PRODUCTS</h3>
        <p className="text-center text-gray-500 mb-8">
          Problems trying to resolve the conflict between
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[{ image: '/product-cover-5.png', title: 'Graphic Design' }, { image: '/product-cover-5 (1).png', title: 'Graphic Design', }, { image: '/product-cover-5 (2).png', title: 'Graphic Design'}, { image: '/product-cover-5 (3).png', title: 'Graphic Design'}, { image: '/product-cover-5 (4).png', title: 'Graphic Design'}, { image: '/product-cover-5 (5).png', title: 'Graphic Design'}, { image: '/product-cover-5 (6).png', title: 'Graphic Design'}, { image: '/product-cover-5 (7).png', title: 'Graphic Design'}].map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={300}
                className="rounded-lg"
              />
              <h5 className="mt-4 font-medium text-lg">{product.title}</h5>
              <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
                <div className="text-stone-300 w-[52px]">$16.48</div>
                <div className="text-teal-700 w-[45px]">$6.48</div>
              </div>
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
              </div>
              
            </div>
          ))}

        </div>

        {/* Promo Banner */}
    <div className="flex lg:-mb-[2.65rem] overflow-hidden flex-col items-center px-20 w-full bg-teal-700 max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col pt-28 w-full max-w-[1036px] min-h-[711px] max-md:pt-24 max-md:max-w-full">
        <div className="mr-px">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden flex-wrap gap-8 items-start h-[599px] max-md:max-w-full">
                <div className="flex overflow-hidden flex-col pt-16 text-white min-w-[240px] w-[509px] max-md:max-w-full">
                  <div className="text-xl tracking-wide">SUMMER 2020</div>
                  <div className="mt-8 text-6xl font-bold tracking-wide leading-[80px] max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
                    Vita Classic Product
                  </div>
                  <div className="mt-8 text-sm tracking-wide leading-5">
                    We know how large objects will act, We know how are objects will act, We know
                  </div>
                  <div className="flex gap-9 items-center self-start mt-8 font-bold text-center">
                    <div className="self-stretch my-auto text-2xl tracking-normal leading-none">$16.48</div>
                    <button
                      className="overflow-hidden self-stretch px-10 py-4 my-auto text-sm tracking-wide leading-loose bg-green-500 rounded-md max-md:px-5"
                      aria-label="Add product to cart"
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
                <div className="flex overflow-hidden flex-col items-center min-w-[240px] w-[510px] max-md:max-w-full"></div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <Image
                loading="lazy"
                src="/col-md-6.png"
                alt="Vita Classic Product showcase"
                className="object-contain max-w-full aspect-[0.74] w-[449px]"
                width={449}
                height={610}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

          {/*continue*/}
  
    <div className="flex flex-col-reverse md:flex-row overflow-hidden gap-8 items-center p-4 max-w-7xl mx-auto mt-6">
      {/* Image Section */}
      <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full md:w-[704px]">
        <Image
          src="/hero-cover-1.png"
          alt="Neural Universe product showcase"
          className="object-contain w-full aspect-[1.03]"
          width={704}
          height={725}
          loading="lazy"
        />
      </div>

      {/* Text Section */}
      <div className="flex overflow-hidden flex-col justify-center self-stretch my-auto font-bold tracking-wide min-w-[240px] w-full md:w-[573px]">
        <div className="text-base tracking-normal text-stone-300">SUMMER 2020</div>
        <h1 className="mt-8 text-4xl leading-[50px] text-slate-800">
          Part of the Neural <span className="block md:inline">Universe</span>
        </h1>
        <p className="mt-8 text-xl leading-8 text-neutral-500">
          We know how large objects will act, <span className="block md:inline">but things on a small scale.</span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 items-start self-start mt-8 text-sm leading-loose text-center">
          <button
            className="overflow-hidden px-10 py-4 rounded-md max-md:px-5 transition-colors duration-300 hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none text-white bg-green-500"
            aria-label="BUY NOW button"
          >
            BUY NOW
          </button>
          <button
            className="overflow-hidden px-10 py-4 rounded-md max-md:px-5 transition-colors duration-300 hover:opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:outline-none text-green-500 border border-green-500 border-solid hover:bg-green-50"
            aria-label="READ MORE button"
          >
            READ MORE
          </button>
        </div>
      </div>
    </div>

            {/*continue*/}

    <div className="flex flex-col justify-center items-center px-20 w-full tracking-wide bg-white max-md:px-5 max-md:max-w-full">
      <div className="w-full text-center py-20 flex flex-col gap-5">
        <p className="text-[#23A6F0] font-semibold">Practice advice</p>
        <h1 className="text-5xl font-bold tracking-tighter">Featured Products</h1>
        <p className="max-w-[28rem] mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex flex-col items-center min-w-[240px] w-[328px]">
            <div className="flex overflow-hidden flex-col max-w-full bg-white shadow-sm w-[348px]">
              <div className="flex overflow-hidden flex-col w-full text-sm font-bold leading-6 text-center text-white whitespace-nowrap">
                <div className="flex overflow-hidden relative flex-col items-start px-5 pt-5 pb-64 w-full aspect-[1.16] max-md:pb-24">
                  <Image
                    src={`/photo (1).png`}
                    alt="Loudest à la Madison #1 (L'integral)"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 size-full"
                  />
                  <div className="max-w-12 py-3 tex-xs flex items-center justify-center overflow-hidden relative self-stretch px-2.5 mb-0 bg-red-500 rounded shadow-sm max-md:mb-2.5">
                    NEW
                  </div>
                </div>
              </div>
              <div className="flex overflow-hidden flex-col px-6 pt-6 pb-9 w-full text-xs text-neutral-500 max-md:px-5">
                <div className="flex overflow-hidden gap-4 items-center self-start leading-none whitespace-nowrap">
                  <div className="self-stretch my-auto text-blue-300">Google</div>
                  <div className="self-stretch my-auto">Trending</div>
                  <div className="self-stretch my-auto">New</div>
                </div>
                <div className="mt-2.5 text-xl leading-8 text-slate-800">Loudest à la Madison #1 (L&apos; integral)</div>
                <div className="mt-2.5 text-sm leading-5">
                  We focus on ergonomics and meeting you where you work. Its only a keystroke away.
                </div>
                <div className="flex overflow-hidden gap-10 justify-between items-center py-4 mt-2.5 w-full leading-none">
                  <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
                    <Image
                      src="/alarm.png"
                      alt="Calendar icon"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                    <div className="self-stretch my-auto">22 April 2021</div>
                  </div>
                  <div className="flex overflow-hidden gap-1.5 items-center self-stretch my-auto">
                    <Image
                      src="/Vector (4).png"
                      alt="Comments icon"
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                    <div className="self-stretch my-auto">10 comments</div>
                  </div>
                </div>
                <button className="flex overflow-hidden gap-2.5 items-center self-start mt-2.5 text-sm font-bold leading-6">
                  <span className="self-stretch my-auto">Learn More</span>
                  <Image
                    src="/vector (2).png"
                    alt="Arrow"
                    width={9}
                    height={9}
                    className="object-contain"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>



            </div>
  );
};

export default HomePage;


import Image from "next/image";

function Products() {
    return (
        <div>


    <div className="flex overflow-hidden flex-col items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col pb-12 max-md:max-w-full">
        <div className="flex overflow-hidden flex-wrap gap-8 items-start max-md:max-w-full">
          <div className="flex overflow-hidden flex-col justify-center py-0.5 min-w-[240px] w-[510px] max-md:max-w-full">
            <img
              loading="lazy"
              alt="Floating Phone Product"
              className="object-contain w-full rounded-md aspect-[0.93] max-md:max-w-full"
              src="/sofa.png"
            />
          </div>
          <div className="flex overflow-hidden flex-col items-start px-6 pt-3 pb-6 min-w-[240px] w-[510px] max-md:px-5 max-md:max-w-full">
            <div className="text-xl tracking-wide text-slate-800">Floating Phone</div>
            <div className="flex gap-2.5 items-start mt-3">
              <div className="flex overflow-hidden gap-1.5 items-start">
                <img
                  loading="lazy"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[22px]"
                  src="/star.png"
                />
                <img
                  loading="lazy"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[22px]"
                  src="/star.png"
                />
                <img
                  loading="lazy"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[22px]"
                  src="/star.png"
                />
                <img
                  loading="lazy"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[22px]"
                  src="/star.png"
                />
                <img
                  loading="lazy"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[22px]"
                  src="/star-2.png"
                />
              </div>
              <div className="text-sm font-bold tracking-wide leading-6 text-neutral-500">10 Reviews</div>
            </div>
            <div className="mt-5 text-2xl font-bold tracking-normal leading-none text-center text-slate-800">
              $1,139.33
            </div>
            <div className="flex gap-1.5 items-center mt-1.5 text-sm font-bold tracking-wide leading-6">
              <div className="self-stretch my-auto text-neutral-500">Availability :</div>
              <div className="self-stretch my-auto text-sky-500">In Stock</div>
            </div>
            <div className="self-stretch mt-8 text-sm tracking-wide leading-5 text-zinc-500 max-md:max-w-full">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie.
              Excitation venial consequent sent nostrum met.
            </div>
            <div className="shrink-0 mt-7 max-w-full h-px border border-solid bg-stone-300 border-stone-300 w-[445px]" />
            <div className="flex gap-2.5 items-center mt-7">
              <div className="flex shrink-0 self-stretch my-auto bg-sky-500 rounded-full fill-sky-500 h-[30px] w-[30px]" />
              <div className="flex shrink-0 self-stretch my-auto bg-green-500 rounded-full fill-green-500 h-[30px] w-[30px]" />
              <div className="flex shrink-0 self-stretch my-auto bg-orange-400 rounded-full fill-orange-400 h-[30px] w-[30px]" />
              <div className="flex shrink-0 self-stretch my-auto bg-slate-800 rounded-full fill-slate-800 h-[30px] w-[30px]" />
            </div>
            <div className="flex overflow-hidden gap-2.5 items-start mt-16 text-sm font-bold tracking-wide leading-6 text-center text-white max-md:mt-10">
              <button className="overflow-hidden px-5 py-2.5 bg-sky-500 rounded-md">Select Options</button>
              <div className="flex gap-2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="white" />
                  <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#E8E8E8" />
                  <path
                    fill="none"
                    stroke="#B9B9B9"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className="flex mx-auto pl-8 overflow-hidden flex-col justify-end w-full bg-white">
      {/* Header Section with tabs */}
      <div className="w-full flex justify-between px-[28.8rem] text-[#737373] text-sm font-semibold">
        <p>Description</p>
        <p>Additional information</p>
        <p>Reviews <span className="text-[#23856D]">(0)</span></p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center mt-4 w-full max-md:max-w-full">
        <div className="flex flex-col items-center pt-6 pb-12 max-w-full w-[1056px]">
          <div className="flex flex-wrap gap-8 items-start w-full">
            {/* Product Image Section */}
            <div className="flex overflow-hidden flex-col grow shrink min-h-[392px] min-w-[240px] w-[266px]">
              <img
                loading="lazy"
                alt="Product Details"
                className="object-contain max-w-full rounded-lg aspect-[0.86] w-[337px]"
                src="/chair.png"
              />
            </div>

            {/* Product Details Section */}
            <div className="flex overflow-hidden flex-col grow shrink min-w-[240px] w-[266px]">
              <div className="flex overflow-hidden flex-col pb-6 max-w-full rounded-lg w-[332px]">
                <div className="text-2xl font-bold tracking-normal leading-none text-slate-800">
                  the quick fox jumps over
                </div>
                <div className="mt-8 text-sm tracking-wide leading-5 text-neutral-500">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </div>
                <div className="mt-8 text-sm tracking-wide leading-5 text-neutral-500">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </div>
                <div className="mt-8 text-sm tracking-wide leading-5 text-neutral-500">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </div>
              </div>
            </div>

            {/* Product Features Section */}
            <div className="flex overflow-hidden flex-col grow shrink font-bold min-w-[240px] w-[266px]">
              <div className="flex overflow-hidden flex-col max-w-full rounded-lg w-[332px]">
                <div className="text-2xl tracking-normal leading-none text-slate-800">
                  the quick fox jumps over
                </div>
                <div className="flex flex-col self-start mt-8 text-sm tracking-wide leading-6 text-neutral-500">
                  <div className="flex overflow-hidden gap-5 items-start">
                    <img
                      loading="lazy"
                      alt=""
                      className="object-contain shrink-0 aspect-[0.56] w-[9px]"
                      src="/Vector (5).png"
                    />
                    <div>the quick fox jumps over the lazy dog</div>
                  </div>
                  <div className="flex overflow-hidden gap-5 items-start">
                    <img
                      loading="lazy"
                      alt=""
                      className="object-contain shrink-0 aspect-[0.56] w-[9px]"
                      src="/Vector (5).png"
                    />
                    <div>the quick fox jumps over the lazy dog</div>
                  </div>
                  <div className="flex overflow-hidden gap-5 items-start">
                    <img
                      loading="lazy"
                      alt=""
                      className="object-contain shrink-0 aspect-[0.56] w-[9px]"
                      src="/Vector (5).png"
                    />
                    <div>the quick fox jumps over the lazy dog</div>
                  </div>
                  <div className="flex overflow-hidden gap-5 items-start">
                    <img
                      loading="lazy"
                      alt=""
                      className="object-contain shrink-0 aspect-[0.56] w-[9px]"
                      src="/Vector (5).png"
                    />
                    <div>the quick fox jumps over the lazy dog</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
   {/*Image section*/}
   <h1 className="items-center justify-center flex">BESTSELLER PRODUCTS</h1>
   <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-neutral-50 max-md:px-5 max-md:max-w-full ">
      <div className="flex overflow-hidden flex-col items-center py-12 w-full max-w-[1124px] max-md:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start max-md:max-w-full">
        
          {/* Product 1 */}
          <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/cover-1.png"
              />
            </div>
            <div className="flex flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5 ">
              <div className="text-base font-bold tracking-normal text-center text-slate-800">
                Graphic Design
              </div>
              <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                English Department
              </div>
              <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
                <div className="text-stone-300 w-[52px]">$16.48</div>
                <div className="text-teal-700 w-[45px]">$6.48</div>
              </div>
            </div>
          </div>

           {/* Product 2 */}
           <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/cover-2.png"
              />
            </div>
            <div className="flex flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
              <div className="text-base font-bold tracking-normal text-center text-slate-800">
                Graphic Design
              </div>
              <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                English Department
              </div>
              <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
                <div className="text-stone-300 w-[52px]">$16.48</div>
                <div className="text-teal-700 w-[45px]">$6.48</div>
              </div>
            </div>
          </div>

           {/* Product 3 */}
           <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/cover-3.png"
              />
            </div>
            <div className="flex flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
              <div className="text-base font-bold tracking-normal text-center text-slate-800">
                Graphic Design
              </div>
              <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                English Department
              </div>
              <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
                <div className="text-stone-300 w-[52px]">$16.48</div>
                <div className="text-teal-700 w-[45px]">$6.48</div>
              </div>
            </div>
          </div>

           {/* Product 4 */}
           <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/cover-4.png"
              />
            </div>
            <div className="flex flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
              <div className="text-base font-bold tracking-normal text-center text-slate-800">
                Graphic Design
              </div>
              <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                English Department
              </div>
              <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
                <div className="text-stone-300 w-[52px]">$16.48</div>
                <div className="text-teal-700 w-[45px]">$6.48</div>
              </div>
            </div>
          </div>

           {/* Product 5 */}
           <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/cover-5.png"
              />
            </div>
            <div className="flex flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
              <div className="text-base font-bold tracking-normal text-center text-slate-800">
                Graphic Design
              </div>
              <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                English Department
              </div>
              <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
                <div className="text-stone-300 w-[52px]">$16.48</div>
                <div className="text-teal-700 w-[45px]">$6.48</div>
              </div>
            </div>
          </div>

           {/* Product 6 */}
           <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/cover-6.png"
              />
            </div>
            <div className="flex flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
              <div className="text-base font-bold tracking-normal text-center text-slate-800">
                Graphic Design
              </div>
              <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                English Department
              </div>
              <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
                <div className="text-stone-300 w-[52px]">$16.48</div>
                <div className="text-teal-700 w-[45px]">$6.48</div>
              </div>
            </div>
          </div>

           {/* Product 7 */}
           <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/cover-1.png"
              />
            </div>
            <div className="flex flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
              <div className="text-base font-bold tracking-normal text-center text-slate-800">
                Graphic Design
              </div>
              <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                English Department
              </div>
              <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
                <div className="text-stone-300 w-[52px]">$16.48</div>
                <div className="text-teal-700 w-[45px]">$6.48</div>
              </div>
            </div>
          </div>

           {/* Product 8 */}
           <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/cover-2.png"
              />
            </div>
            <div className="flex flex-col items-center px-6 pt-6 pb-9 w-full max-md:px-5">
              <div className="text-base font-bold tracking-normal text-center text-slate-800">
                Graphic Design
              </div>
              <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                English Department
              </div>
              <div className="flex gap-1.5 items-start px-1 py-1.5 mt-2.5 text-base font-bold tracking-normal text-center whitespace-nowrap">
                <div className="text-stone-300 w-[52px]">$16.48</div>
                <div className="text-teal-700 w-[45px]">$6.48</div>
              </div>
            </div>
          </div>
          </div>

                    {/*logo-section*/}
          
                    <div className="w-full flex flex-col lg:flex-row sm:flex-col justify-center items-center gap-12 bg-[#FAFAFA] lg:py-12 lg:px-20 p-32">
                {/* Logo images */}
                <div className="flex flex-wrap justify-center gap-12">
                  <div className="flex justify-center items-center">
                    <Image src="/logo-3.png" alt="Hooli" width={150} height={50} className="object-contain" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/logo-4.png" alt="Lyft" width={150} height={50} className="object-contain" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/logo-5.png" alt="Leaf" width={150} height={50} className="object-contain" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/logo-6.png" alt="Stripe" width={150} height={50} className="object-contain" />
                  </div>
                  <div className="flex justify-center items-center">
                    <Image src="/logo-7.png" alt="AWS" width={150} height={50} className="object-contain" />
                  </div>
                </div>
              </div>
          </div>
          </div>


        </div>
    );
}

export default Products;
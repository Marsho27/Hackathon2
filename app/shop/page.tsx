import Link from "next/link";
import Image from "next/image";

function Shop() {
    return ( 
        <div>



    <div className="flex overflow-hidden justify-between items-center py-6 px-6 sm:px-20 w-full font-bold text-center whitespace-nowrap bg-neutral-50">
      <div className="flex overflow-hidden flex-wrap gap-8 items-center">
        <div className="overflow-hidden self-stretch my-auto text-2xl tracking-normal leading-none text-slate-800">
          Shop
        </div>
      </div>
      <nav className="flex overflow-hidden items-end self-stretch my-auto text-sm tracking-wide leading-6" aria-label="Breadcrumb">
        <div className="flex overflow-hidden gap-4 items-center py-2.5">
          <Link className="self-stretch my-auto text-slate-800" href="/">
            Home
          </Link>
          <Image
            alt="arrow"
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
            src="/Vector (5).png"
            width={9}
            height={16}
          />
          <span className="self-stretch my-auto text-stone-300">Shop</span>
        </div>
      </nav>
    </div>

    {/*Image section*/}
    <div className="flex flex-col justify-center items-center px-5 sm:px-20 w-full text-white bg-neutral-50">
      <div className="flex flex-col items-center pb-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
          {/* Category Item 1 */}
          <div className="relative overflow-hidden">
            <Image
              src="/pic-1.png"
              alt="clothes category"
              className="object-cover w-full h-full"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>

          {/* Category Item 2 */}
          <div className="relative overflow-hidden">
            <Image
              src="/pic-2.png"
              alt="clothes category"
              className="object-cover w-full h-full"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>

          {/* Category Item 3 */}
          <div className="relative overflow-hidden">
            <Image
              src="/pic-3.png"
              alt="clothes category"
              className="object-cover w-full h-full"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>

          {/* Category Item 4 */}
          <div className="relative overflow-hidden">
            <Image
              src="/pic-4.png"
              alt="clothes category"
              className="object-cover w-full h-full"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>

          {/* Category Item 5 */}
          <div className="relative overflow-hidden">
            <Image
              src="/pic-5.png"
              alt="clothes category"
              className="object-cover w-full h-full"
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>

{/*filter section*/}
    <div className="flex flex-col items-center px-5 sm:px-20 w-full bg-white">
      <div className="flex flex-col justify-center items-center py-6 w-full max-w-[1050px] sm:max-w-full">
        <div className="flex flex-wrap gap-10 justify-between items-center w-full sm:max-w-full">
          {/* Showing all results */}
          <div className="gap-4 self-stretch my-auto text-sm font-bold tracking-wide leading-6 text-neutral-500">
            Showing all 12 results
          </div>
          
          {/* Views Dropdown */}
          <div className="flex gap-4 items-center self-stretch my-auto">
            <div className="self-stretch my-auto text-sm font-bold tracking-wide leading-6 text-neutral-500">Views:</div>
            <div className="flex gap-4 items-center self-stretch my-auto">
              <button className="flex overflow-hidden items-center self-stretch p-4 my-auto rounded-md border border-gray-200 h-[60px] w-[60px]" aria-label="Grid view">
                <Image src="/logo-2.png" alt="Grid View" width={16} height={16} className="object-contain" />
              </button>
              <button className="flex overflow-hidden items-center self-stretch p-4 my-auto rounded-md border border-gray-200 h-[60px] w-[60px]" aria-label="List view">
                <Image src="/logo-1.png" alt="List View" width={16} height={16} className="object-contain" />
              </button>
            </div>
          </div>
          
          {/* Sorting & Filter */}
          <div className="flex gap-4 self-stretch my-auto text-sm tracking-wide whitespace-nowrap min-w-[240px]">
            <div className="flex flex-col my-auto leading-7 text-neutral-500 w-[141px]">
              <select className="flex gap-1.5 px-3.5 py-3 rounded-md border border-solid bg-stone-50 border-zinc-300 max-md:pr-5">
                <option>Popularity</option>
              </select>
            </div>
            <button className="overflow-hidden px-5 py-2.5 font-bold leading-6 text-center text-white bg-sky-500 rounded-md w-[94px]">
              Filter
            </button>
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
    
    {/*Image section*/}
    <div className="flex overflow-hidden flex-col justify-center items-center px-20 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center py-12 w-full max-w-[1124px] max-md:max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-start max-md:max-w-full">
          {/* Product 1 */}
          <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/product-1.png"
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
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
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
                src="/product-2.png"
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
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
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
                src="/product-cover-6.png"
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
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
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
                src="/product-4.png"
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
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
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
                src="/product-5.png"
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
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
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
                src="/product-6.png"
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
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
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
                src="/product-7.png"
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
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
              </div>
            </div>
          </div>

          {/* Product 8*/}
          <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/product-8.png"
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
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
              </div>
            </div>
          </div>

{/* Product 9*/}
<div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/product-9.png"
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
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
              </div>
            </div>
          </div>

          {/* Product 10*/}
          <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/product-10.png"
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
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
              </div>
            </div>
          </div>

          {/* Product 11*/}
          <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/product-11.png"
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
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
              </div>
            </div>
          </div>

          {/* Product 12*/}
          <div className="flex flex-col items-center w-[238px] bg-white">
            <div className="overflow-hidden flex flex-col w-full bg-white">
              <img
                loading="lazy"
                className="object-contain w-full aspect-[0.56]"
                alt="Graphic Design"
                src="/product-12.png"
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
              <div className="flex gap-1.5 items-center mt-2.5">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#23A6F0]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#2DC071]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#E77C40]"></div>
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-[#252B42]"></div>
              </div>
            </div>
          </div>


          {/* Repeat for more products as needed */}
        </div>
      </div>
    </div>
     


    <div className="flex justify-center items-center min-h-screen p-0">
      <div className="flex justify-center text-sm font-bold tracking-wide leading-6 text-center text-sky-500 whitespace-nowrap bg-white rounded-md border-solid shadow-sm border-[1.346px] border-stone-300">
        <div className="flex items-start">
          <div className="overflow-hidden self-stretch px-3 py-3 border bg-zinc-100 text-stone-300 border-stone-300">
            First
          </div>
          <div className="overflow-hidden self-stretch px-3 py-3 border border-gray-200">
            1
          </div>
          <div className="overflow-hidden self-stretch px-3 py-3 border border-gray-200 text-white bg-sky-500">
            2
          </div>
          <div className="overflow-hidden self-stretch px-3 py-3 border border-gray-200">
            3
          </div>
          <div className="overflow-hidden self-stretch px-3 py-3 border border-gray-200">
            Next
          </div>
        </div>
      </div>
    </div>



     
        </div>
     );
}

export default Shop;
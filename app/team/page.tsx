import Link from "next/link";


function About() {
    return (
        <div>


    <div className="flex overflow-hidden flex-col pb-8 w-full font-bold bg-white max-md:max-w-full">
      <div className="flex overflow-hidden flex-col items-center px-20 pt-5 w-full bg-white bg-opacity-50 max-md:px-5">
        <div className="flex z-10 flex-col -mb-8 w-full max-w-[1043px] max-md:mb-2.5">
          <div className="flex overflow-hidden flex-col justify-center items-center self-center py-12 mt-8 max-w-full tracking-wide text-center w-[870px]">
            <div className="flex overflow-hidden items-center w-full">
              <div className="flex overflow-hidden flex-col items-center self-stretch my-auto min-w-[240px] w-full">
                <div className="text-base tracking-normal text-neutral-500">WHAT WE DO</div>
                <h1 className="mt-4 text-6xl leading-none text-slate-800 max-md:text-4xl">Innovation tailored for you</h1>
                <nav className="flex overflow-hidden gap-4 items-center py-2.5 mt-4 text-sm leading-6 whitespace-nowrap" aria-label="Breadcrumb">
                  <Link className="self-stretch my-auto text-slate-800" href="/">
                    Home
                  </Link>
                  <img
                    loading="lazy"
                    alt="Arrow"
                    className="object-contain shrink-0 self-stretch my-auto aspect-[0.56] w-[9px]"
                    src="/Vector (5).png"
                  />
                  <span className="self-stretch my-auto text-neutral-500">Team</span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="overflow-hidden justify-center w-full bg-white">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Left Image */}
        <div className="w-full md:w-6/12">
          <img
            loading="lazy"
            alt="Woman with red background"
            className="object-contain w-full aspect-[1.32]"
            src="/red.png"
          />
        </div>

        {/* Right Images Grid */}
        <div className="w-full md:w-6/12 grid grid-cols-2 gap-5">
          <img
            loading="lazy"
            alt="Black bag woman"
            className="object-contain w-full aspect-[1.39]"
            src="/red2.png"
          />
          <img
            loading="lazy"
            alt="Jacket woman"
            className="object-contain w-full aspect-[1.39]"
            src="/red3.png"
          />
          <img
            loading="lazy"
            alt="Black hoodie woman"
            className="object-contain w-full aspect-[1.39]"
            src="/red4.png"
          />
          <img
            loading="lazy"
            alt="Blue jacket woman"
            className="object-contain w-full aspect-[1.39]"
            src="/red5.png"
          />
        </div>
      </div>
    </div>

       {/* Team Members*/}

    <div className="flex flex-col items-center px-5 md:px-20 w-full bg-white">
      <div className="flex flex-col items-center py-28 w-full max-w-[1050px] max-md:py-24">
        <div className="flex flex-col items-center text-4xl font-bold tracking-wide leading-none text-slate-800 w-full md:w-[607px]">
          <h2 className="text-center">Meet Our Team</h2>
        </div>
        <div className="flex flex-wrap gap-8 items-center justify-center mt-28 w-full max-md:mt-10">
          {/* Team Member 1 */}
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
            <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
              <div className="flex flex-col w-full">
                <img
                  loading="lazy"
                  alt="Team Member 1"
                  className="object-contain w-full aspect-[1.37]"
                  src="/team-1.jpg"
                />
              </div>
              <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                <div className="text-base font-bold tracking-normal text-center text-slate-800">
                  Username
                </div>
                <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                  Profession
                </div>
                <div className="flex gap-5 justify-center items-center mt-2.5">
                  <img
                    loading="lazy"
                    alt="Facebook"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/facebook.png"
                  />
                  <img
                    loading="lazy"
                    alt="Instagram"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/instagram.png"
                  />
                  <img
                    loading="lazy"
                    alt="Twitter"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/twitter (1).png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
            <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
              <div className="flex flex-col w-full">
                <img
                  loading="lazy"
                  alt="Team Member 2"
                  className="object-contain w-full aspect-[1.37]"
                  src="/team-2.jpg"
                />
              </div>
              <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                <div className="text-base font-bold tracking-normal text-center text-slate-800">
                  Username
                </div>
                <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                  Profession
                </div>
                <div className="flex gap-5 justify-center items-center mt-2.5">
                  <img
                    loading="lazy"
                    alt="Facebook"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/facebook.png"
                  />
                  <img
                    loading="lazy"
                    alt="Instagram"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/instagram.png"
                  />
                  <img
                    loading="lazy"
                    alt="Twitter"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/twitter (1).png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
            <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
              <div className="flex flex-col w-full">
                <img
                  loading="lazy"
                  alt="Team Member 3"
                  className="object-contain w-full aspect-[1.37]"
                  src="/team-3.jpg"
                />
              </div>
              <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                <div className="text-base font-bold tracking-normal text-center text-slate-800">
                  Username
                </div>
                <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                  Profession
                </div>
                <div className="flex gap-5 justify-center items-center mt-2.5">
                  <img
                    loading="lazy"
                    alt="Facebook"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/facebook.png"
                  />
                  <img
                    loading="lazy"
                    alt="Instagram"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/instagram.png"
                  />
                  <img
                    loading="lazy"
                    alt="Twitter"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/twitter (1).png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
            <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
              <div className="flex flex-col w-full">
                <img
                  loading="lazy"
                  alt="Team Member 4"
                  className="object-contain w-full aspect-[1.37]"
                  src="/team-4.jpg"
                />
              </div>
              <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                <div className="text-base font-bold tracking-normal text-center text-slate-800">
                  Username
                </div>
                <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                  Profession
                </div>
                <div className="flex gap-5 justify-center items-center mt-2.5">
                  <img
                    loading="lazy"
                    alt="Facebook"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/facebook.png"
                  />
                  <img
                    loading="lazy"
                    alt="Instagram"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/instagram.png"
                  />
                  <img
                    loading="lazy"
                    alt="Twitter"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/twitter (1).png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
            <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
              <div className="flex flex-col w-full">
                <img
                  loading="lazy"
                  alt="Team Member 5"
                  className="object-contain w-full aspect-[1.37]"
                  src="/team-5.jpg"
                />
              </div>
              <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                <div className="text-base font-bold tracking-normal text-center text-slate-800">
                  Username
                </div>
                <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                  Profession
                </div>
                <div className="flex gap-5 justify-center items-center mt-2.5">
                  <img
                    loading="lazy"
                    alt="Facebook"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/facebook.png"
                  />
                  <img
                    loading="lazy"
                    alt="Instagram"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/instagram.png"
                  />
                  <img
                    loading="lazy"
                    alt="Twitter"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/twitter (1).png"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
            <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
              <div className="flex flex-col w-full">
                <img
                  loading="lazy"
                  alt="Team Member 6"
                  className="object-contain w-full aspect-[1.37]"
                  src="/team-6.jpg"
                />
              </div>
              <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                <div className="text-base font-bold tracking-normal text-center text-slate-800">
                  Username
                </div>
                <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                  Profession
                </div>
                <div className="flex gap-5 justify-center items-center mt-2.5">
                  <img
                    loading="lazy"
                    alt="Facebook"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/facebook.png"
                  />
                  <img
                    loading="lazy"
                    alt="Instagram"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/instagram.png"
                  />
                  <img
                    loading="lazy"
                    alt="Twitter"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/twitter (1).png"
                  />
                </div>
              </div>
            </div>
          </div>
                   {/* Team Member 7 */}
                   <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
            <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
              <div className="flex flex-col w-full">
                <img
                  loading="lazy"
                  alt="Team Member 5"
                  className="object-contain w-full aspect-[1.37]"
                  src="/team-7.jpg"
                />
              </div>
              <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                <div className="text-base font-bold tracking-normal text-center text-slate-800">
                  Username
                </div>
                <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                  Profession
                </div>
                <div className="flex gap-5 justify-center items-center mt-2.5">
                  <img
                    loading="lazy"
                    alt="Facebook"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/facebook.png"
                  />
                  <img
                    loading="lazy"
                    alt="Instagram"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/instagram.png"
                  />
                  <img
                    loading="lazy"
                    alt="Twitter"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/twitter (1).png"
                  />
                </div>
              </div>
            </div>
          </div>

                   {/* Team Member 8 */}
                   <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
            <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
              <div className="flex flex-col w-full">
                <img
                  loading="lazy"
                  alt="Team Member 5"
                  className="object-contain w-full aspect-[1.37]"
                  src="/team-8.jpg"
                />
              </div>
              <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                <div className="text-base font-bold tracking-normal text-center text-slate-800">
                  Username
                </div>
                <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                  Profession
                </div>
                <div className="flex gap-5 justify-center items-center mt-2.5">
                  <img
                    loading="lazy"
                    alt="Facebook"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/facebook.png"
                  />
                  <img
                    loading="lazy"
                    alt="Instagram"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/instagram.png"
                  />
                  <img
                    loading="lazy"
                    alt="Twitter"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/twitter (1).png"
                  />
                </div>
              </div>
            </div>
          </div>

                   {/* Team Member 9 */}
                   <div className="flex flex-col self-stretch my-auto min-w-[240px] w-full sm:w-[316px]">
            <div className="flex flex-col max-w-full bg-white w-full sm:w-[316px]">
              <div className="flex flex-col w-full">
                <img
                  loading="lazy"
                  alt="Team Member 5"
                  className="object-contain w-full aspect-[1.37]"
                  src="/team-9.jpg"
                />
              </div>
              <div className="flex flex-col items-center self-center p-8 w-full sm:max-w-[316px] max-md:px-5">
                <div className="text-base font-bold tracking-normal text-center text-slate-800">
                  Username
                </div>
                <div className="mt-2.5 text-sm font-bold tracking-wide leading-6 text-center text-neutral-500">
                  Profession
                </div>
                <div className="flex gap-5 justify-center items-center mt-2.5">
                  <img
                    loading="lazy"
                    alt="Facebook"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/facebook.png"
                  />
                  <img
                    loading="lazy"
                    alt="Instagram"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/instagram.png"
                  />
                  <img
                    loading="lazy"
                    alt="Twitter"
                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                    src="/twitter (1).png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




        </div>
);
}
export default About;
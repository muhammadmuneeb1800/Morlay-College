import Image from "next/image";
import Slider from "./(components)/slider/slider";
import Link from 'next/link'
import imgsearch from '../public/icons8-search-50.png'
import Card from "./(components)/card/card"
import Card2 from "./(components)/card2/card2"
import img1 from "../public/asset 23.jpeg"
import img2 from "../public/asset 23.jpeg"
import img3 from "../public/asset 24.jpeg"
import img4 from "../public/asset 25.jpeg"
import img5 from "../public/asset 26.jpeg"
import img6 from "../public/asset 23.jpeg"
import girlimg from '../public/asset 7.jpeg'
import kala from '../public/kala.png'
import computer from '../public/computer.png'
import dance from '../public/dance.png' 
import redarrow from '../public/icons8-arrow-48.png'
import news from '../public/asset 30.jpeg'
import com from '../public/asset 31.jpeg'
import skill from '../public/asset 32.jpeg'
import Card3 from './(components)/card3/card3'
import blackimg1 from '../public/Main → Article.png'
import blackimg2 from '../public/Main → Article2.png'
import blackimg3 from '../public/Main → Article3.png'
import link1 from '../public/asset 11.png'
import link2 from '../public/asset 12.png'
import link3 from '../public/asset 13.jpeg'
import link4 from '../public/asset 14.png'
import link5 from '../public/asset 15.png'
import link6 from '../public/asset 16.jpeg'
import link7 from '../public/asset 17.png'
import link8 from '../public/asset 18.png'
import link9 from '../public/asset 19.png'


export default function Home() {
  const items = [
    { imageSrc: img1, text: 'Short Courses' },
    { imageSrc: img2, text: 'Higher Education courses' },
    { imageSrc: img3, text: '16 To 18 hub' },
    { imageSrc: img4, text: 'Qualifications for Adults' },
    { imageSrc: img5, text: 'ESOL,Maths,English and Digital Skills' },
    { imageSrc: img6, text: 'T Levels' },
  ];
  const itemstwo = [
    { imageSrc: kala, text: 'North Kensington Centre for Skills',},
    { imageSrc: computer, text: 'Chelsea Centre for Creative Industries',},
    { imageSrc: dance, text: 'Waterloo Centre for Adult Education',},
  ];
  const itemsthree = [
    { imageSrc: blackimg1,},
    { imageSrc: blackimg2,},
    { imageSrc: blackimg3,},
  ];
  return (
    <>
    {/* Slider */}
      <Slider />


      <div className="flex justify-center px-1">
      <div className="bg-slate-200 w-[1000px] rounded-xl p-4 md:gap-3 justify-center flex flex-col md:mx-2 lg:flex lg:flex-row items-center">
        <div className="justify-center py-3 items-center">
          <p className="text-xl font-bold">Search Our Courses</p>
        </div>
        <div className="h-12 w-0.5 hidden lg:block bg-slate-500"></div>
        <div className="flex">
          <input className="md:rounded-s-lg md:rounded-e-md rounded-xl py-3 border-0 focus:outline-none " type="text" placeholder="Search your search term" />
        </div>
        <div className="hidden lg:block h-12 w-0.5 bg-slate-500"></div>
        <div className="md:flex md:flex-row">
        <div>
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            className="text-white focus:outline-none  font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Location{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdownDivider"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </Link>
              </li>
            </ul>
            <div className="py-2">
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Separated link
              </Link>
            </div>
          </div>
        </div>
        <div>
          <button
            id="dropdownDividerButton"
            data-dropdown-toggle="dropdownDivider"
            className="text-white focus:outline-none  font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Course Type{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdownDivider"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDividerButton"
            >
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </Link>
              </li>
            </ul>
            <div className="py-2">
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Separated link
              </Link>
            </div>
          </div>
        </div>
        <div className="cursor-pointer justify-center flex">
            <Image src={imgsearch} height={40} alt="search"/>
        </div>
        </div>
      </div>
      </div>

    {/* Cards */}

      <Card items={items}/>


      {/* About */}
      <div className="mt-20 px-3">
        <div className="flex flex-col lg:flex lg:pl-16 lg:px-10  lg:space-x-6 lg:flex-row">
          <div className="mx-auto"><Image className="lg:w-[900px] md:w-[900px] rounded-lg" alt="girl" src={girlimg}/></div>
          <div className="mx-auto">
            <p className="text-xl md:text-4xl py-4 font-bold">About Morley College London</p>
            <p className="md:mt-2 md:text-[18px] text-[#8f8f88] font-light">Morley College London has four centres located in Waterloo, Chelsea, Ladbroke Grove (North Kensington) and Stockwell, all offering an exciting choice of courses for all ages.</p>
            <p className="mt-2 md:text-[18px] text-[#8f8f88] font-light">We celebrate the arts, give everybody the opportunity to learn, and believe education is the key to changing lives</p>
            <Link className="flex flex-row text-[#e70072] gap-2 items-center mt-5 md:text-lg text-sm" href='#'>Find out more about Morley College London<Image className="text-[#e70072] w-5" src={redarrow} alt="Arrow"/></Link>
          </div>
        </div>
      </div>

      {/* Our Courses */}

      <div className="mt-28 px-3 p-3">
        <h1 className="text-3xl lg:pl-14 md:pl-1 font-bold">Our Centres</h1>
        <div>
        <Card2 itemstwo={itemstwo}/>
        </div>
      </div>


      {/* New */}

      <div className="mt-20 mb-6 px-3">
            <p className="text-3xl lg:pl-14 md:pl-1 font-bold">News</p> 
            <div className="flex flex-col lg:flex lg:flex-row lg:px-20 mt-4">
              <div>
              <div className="relative">
        <Image src={news} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
 className="rounded-t-lg" alt="news" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2">
            <h3 className="text-lg uppercase -mt-7 text-white font-light">27th November</h3>
            <p className="mt-2 text-2xl font-bold text-white">Exploring Rich and Diverse World of Creative Industries on New Online Course</p>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
    </div>
              </div>
              <div>
                <div>
                <div className="relative">
        <div>
        <Image src={com}  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 35vw"
 className="md:w-full" alt="news" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2">
            <h3 className="text-lg uppercase text-white font-light">23rd November</h3>
            <p className="mt-2 text-2xl font-bold text-white">Exploring Rich and Diverse World of Creative Industries on New Online Course</p>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black"></div>
        </div>
        </div>
    </div>
                </div>
                <div>
                <div className="relative">
        <div className="">
        <Image src={skill} sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 36.5vw"
 className="rounded-b-lg w-full" alt="news" />
        <div className="absolute bottom-0 left-0 right-0 px-4 py-2">
            <h3 className="text-lg uppercase text-white font-light">16th November</h3>
            <p className="mt-2 text-2xl font-bold text-white">Exploring Rich and Diverse World of Creative Industries on New Online Course</p>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black"></div>

        </div>
        </div>
    </div>
                </div>
              </div>
            </div>         
        </div> 

        {/* Threee Cards */}

        <Card3 itemsthree={itemsthree}/>


        {/* Links */}

        <div>
        <hr className="mt-16 lg:ml-20 lg:mr-20 ml-4 mr-4" />
          <div className="flex flex-row items-center gap-1 justify-center px-3 lg:px-20">
            <Link href="#"><Image src={link1} width={250} alt="link1"/></Link>
            <Link href="#"><Image src={link2} alt="link2"/></Link>
            <Link href="#"><Image src={link3} width={150} alt="link3"/></Link>
            <Link href="#"><Image src={link4} width={205} alt="link4"/></Link>
            <Link href="#"><Image src={link5} width={180} alt="link5"/></Link>
            <Link href="#"><Image src={link6} width={170} alt="link6"/></Link>
            <Link href="#"><Image src={link7} width={90} alt="link7"/></Link>
            <Link href="#"><Image src={link8} width={160} alt="link8"/></Link>
            <Link href="#"><Image src={link9} width={80} alt="link9"/></Link>
          </div>
        </div>
    </>
  );
}

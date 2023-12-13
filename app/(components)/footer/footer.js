import React from "react";
import footerimg from "../../../public/asset 20.png";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {" "}
      <div>
        <footer class="text-gray-400 bg-gray-900 body-font mt-20">
          <div class="flex lg:flex-row py-20 flex-col md:text-center justify-between md:px-4 lg:px-20">
            <div class="w-64 flex-shrink-0 lg:w-0 items-start md:mx-auto lg:mx-0 md:text-center px-4 pb-10 ">
              <Image src={footerimg} />
            </div>
            <div class="flex flex-col lg:flex-row justify-center">
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-bold text-white tracking-widest text-lg mb-3">
                  About
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-400 hover:text-white">Contact Us</a>
                  </li>
                  <li>
                    <a class="text-gray-400 hover:text-white">Venue Hire</a>
                  </li>
                  <li>
                    <a class="text-gray-400 hover:text-white">Work for us</a>
                  </li>
                  <li>
                    <a class="text-gray-400 hover:text-white">Accessibility</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-bold text-white tracking-widest text-lg mb-3">
                  Helpful Links
                </h2>
                <nav class="list-none mb-10">
                  <li>
                    <a class="text-gray-400 hover:text-white">Legal</a>
                  </li>
                  <li>
                    <a class="text-gray-400 hover:text-white">Staff Login</a>
                  </li>
                </nav>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
                  North Kensington Centre
                </h2>
                <p class="text-gray-400 hover:text-white mb-3">
                  Wornington Road London W10 5QQ
                </p>
                <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3 mt-3">
                  Chelsea Centre
                </h2>
                <p class="text-gray-400 hover:text-white mb-3">
                  Hortensia Road London SW10 0QS
                </p>
                <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3 mt-3">
                  Waterloo Centre
                </h2>
                <p class="text-gray-400 hover:text-white mb-3">
                  61 Westminster Bridge Road London SE1 7HT
                </p>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <p class="text-gray-400 hover:text-white mb-6">
                  Copyright 2023 Morley College. Morley College London is a
                  trading name of Morley College Limited, a company limited by
                  guarantee in England and Wales no 2829836. Registered charity
                  no 1023523 Registered Business Address: 61 Westminster Bridge
                  Rd, London, SE1 7HT
                </p>
                <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                  <a class="text-gray-400">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-400">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-400">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

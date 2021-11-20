import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const PlansPage = () => {
  return (
    <Main
      meta={<Meta title="Videas.me plans" description="videas.me plans." />}
    >
      <section className="pt-20 pb-24 2xl:py-40">
        <div className="container mx-auto px-4">
          <div className="mb-16 md:mb-24 text-center">
            <h2 className="mb-8 md:mb-14 text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading">
              Choose a plan
            </h2>
            <p className="text-lg text-gray-800">
              We have a number of plan options to help you to get started on
              your videas journey.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
                <div className="px-12 py-16 bg-gray-500 rounded-3xl">
                  <div className="pb-8 mb-14 border-b border-gray-400">
                    <div className="flex justify-between items-center px-3">
                      <h3 className="text-4xl text-white font-bold font-heading">
                        Free
                      </h3>
                      <p className="text-lg text-white font-bold">$0,00</p>
                    </div>
                  </div>
                  <ul className="text-lg text-white mb-16">
                    <li className="flex items-center mb-8">
                      <span className="mr-6">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>Complete files</span>
                    </li>
                    <li className="flex items-center mb-8">
                      <span className="mr-6">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>10GB cloud storage</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-6">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>5 team members</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a
                      className="inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold text-white"
                      href="#"
                    >
                      Try free
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-3 mb-8 lg:mb-0">
                <div className="px-12 py-16 bg-blue-500 rounded-3xl">
                  <div className="pb-8 mb-14 border-b border-blueGray-300">
                    <div className="flex justify-between items-center px-3">
                      <h3 className="text-4xl text-white font-bold font-heading">
                        Team
                      </h3>
                      <p className="text-lg text-white font-bold">$9,99</p>
                    </div>
                  </div>
                  <ul className="text-lg text-white mb-16">
                    <li className="flex items-center mb-8">
                      <span className="mr-6">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>Complete files</span>
                    </li>
                    <li className="flex items-center mb-8">
                      <span className="mr-6">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>100GB cloud storage</span>
                    </li>
                    <li className="flex items-center mb-8">
                      <span className="mr-6">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>20 team members</span>
                    </li>
                    <li className="flex items-center mb-8">
                      <span className="mr-6">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>Unlimited anonymous board editors</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-6">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>10GB cloud storage</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a
                      className="inline-block px-10 py-4 border border-blueGray-300 hover:border-blueGray-100 rounded-full font-bold text-white"
                      href="#"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-3">
                <div className="px-12 py-16 bg-gray-500 rounded-3xl">
                  <div className="pb-8 mb-14 border-b border-gray-400">
                    <div className="flex justify-between items-center px-3">
                      <h3 className="text-4xl text-white font-bold font-heading">
                        Premium
                      </h3>
                      <p className="text-lg text-white font-bold">$29,99</p>
                    </div>
                  </div>
                  <ul className="text-lg text-white mb-16">
                    <li className="flex items-center mb-8">
                      <span className="mr-6">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>Complete files</span>
                    </li>
                    <li className="flex items-center mb-8">
                      <span className="mr-6">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>20GB cloud storage</span>
                    </li>
                    <li className="flex items-center">
                      <span className="mr-6">
                        <svg
                          width="20"
                          height="16"
                          viewBox="0 0 20 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.81671 15.0418L0 8.2251L0.90027 7.32483L6.81671 13.2413L19.0997 0.958252L20 1.85852L6.81671 15.0418Z"
                            fill="white"
                          ></path>
                        </svg>
                      </span>
                      <span>200+ team members</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <a
                      className="inline-block px-10 py-4 border border-gray-200 hover:border-gray-100 rounded-full font-bold text-white"
                      href="#"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default PlansPage;

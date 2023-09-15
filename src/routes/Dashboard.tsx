import ApexCharts from "apexcharts";
import { useEffect } from "react";
import profile from "../assets/images/avatar2.jpg";
import profile2 from "../assets/images/avatar3.jpg";
import profile3 from "../assets/images/avatar4.jpg";
import profile4 from "../assets/images/avatar1.jpg";
import { RiVisaLine, RiMastercardLine } from "react-icons/ri";
import Navbar from "../components/Navbar";

export const Dashboard = () => {
  const options = {
    colors: ["#85CB9D", "#FDBA8C"],
    series: [
      {
        name: "Income",
        color: "#85CB9D",
        data: [
          { x: "Mon", y: 231 },
          { x: "Tue", y: 122 },
          { x: "Wed", y: 63 },
          { x: "Thu", y: 421 },
          { x: "Fri", y: 122 },
          { x: "Sat", y: 323 },
          { x: "Sun", y: 111 },
        ],
      },
      {
        name: "Expenses",
        color: "#FDBA8C",
        data: [
          { x: "Mon", y: 232 },
          { x: "Tue", y: 113 },
          { x: "Wed", y: 341 },
          { x: "Thu", y: 224 },
          { x: "Fri", y: 522 },
          { x: "Sat", y: 411 },
          { x: "Sun", y: 243 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: "320px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
        borderRadiusApplication: "end",
        borderRadius: 12,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"],
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };
  const Charts = () => {
    if (
      document.getElementById("column-chart") &&
      typeof ApexCharts !== "undefined"
    ) {
      const chart = new ApexCharts(
        document.getElementById("column-chart"),
        options
      );
      chart.render();
    }
  };
  useEffect(() => {
    window.addEventListener("load", Charts);
    return () => document.removeEventListener("load", Charts);
  }, []);
  return (
    <>
      <div className="flex overflow-x-hidden overflow-y-hidden h-screen w-screen">
        <Navbar/>
        <section className="z-20 relative flex flex-col pl-32 w-full pr-14 sm:pl-96">
          <div className="pt-8 w-full">
            <input
              placeholder="Search, transactions, categories or accounts"
              className="flex-shrink-0 w-full h-8 rounded-xl p-6"
            ></input>
            <div className="flex flex-row w-full justify-between items-center pt-6 mb-2">
              <div>
                <h1 className="text-gray-200 font-inter font-bold text-xl">
                  Transactions
                </h1>
              </div>
              <div>
                <button className="h-12 w-40 border rounded-md hover:border-[#85CB9D] hover:text-[#85CB9D]">
                  Transaction History
                </button>
                <button className="h-12 w-40 bg-[#85CB9D] rounded-md hover:bg-[#6aa37e] ml-4">
                  Add transaction
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-48 bg-black/20 rounded-sm flex flex-row p-2 space-x-2 justify-center items-center ">
            <div className="w-1/2 h-44 rounded-md bg-glassback bg-cover transition-gpu duration-200 hover:scale-105 hover:z-10 hover:shadow-md border border-gray-300">
              <div className="w-full h-full bg-opacity-10 backdrop-filter backdrop-blur-sm p-4 space-y-20 rounded-md bg-clip-padding ">
                <div className="flex flex-col">
                  <span className="text-sm">Total Balance</span>
                  <h1 className="font-bold">$234.000</h1>
                </div>
                <div className="flex flex-row bottom-0 justify-between">
                  <span>**** **** **** 6323</span>
                  <h1 className="text-2xl">
                    <RiVisaLine />
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-1/2 h-44 rounded-md bg-glassback bg-cover transition-gpu duration-200 hover:scale-105 hover:z-10 hover:shadow-md border border-gray-300">
              <div className="w-full h-full bg-opacity-10 backdrop-filter backdrop-blur-sm p-4 space-y-20  rounded-md bg-clip-padding ">
                <div className="flex flex-col">
                  <span className="text-sm">Total Balance</span>
                  <h1 className="font-bold">$1.728.619,82</h1>
                </div>
                <div className="flex flex-row justify-between bottom-0">
                  <span>**** **** **** 7286</span>
                  <img src="" />
                  <h1 className="text-2xl">
                    <RiMastercardLine />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-auto w-full mt-2 bottom-0 mb-2 bg-black/10 dark:bg-gray-800 p-4 md:p-6 shadow ">
            <div className="w-full rounded-lg ">
              <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-3">
                    <svg
                      className="w-6 h-6 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 19"
                    >
                      <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
                      <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="leading-none text-2xl font-bold text-gray-300 dark:text-white pb-1">
                      3.4k
                    </h5>
                    <p className="text-sm font-normal text-gray-200 dark:text-gray-400">
                      Leads generated per week
                    </p>
                  </div>
                </div>
                <div>
                  <span className="bg-green-100 text-green-500 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                    <svg
                      className="w-2.5 h-2.5 mr-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13V1m0 0L1 5m4-4 4 4"
                      />
                    </svg>
                    42.5%
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <dl className="flex items-center">
                  <dt className="text-gray-200 dark:text-gray-400 text-sm font-normal mr-1">
                    Money spent:
                  </dt>
                  <dd className="text-gray-200 text-sm dark:text-white font-semibold">
                    $3,232
                  </dd>
                </dl>
                <dl className="flex items-center justify-end">
                  <dt className="text-gray-200 dark:text-gray-400 text-sm font-normal mr-1">
                    Conversion rate:
                  </dt>
                  <dd className="text-gray-200 text-sm dark:text-white font-semibold">
                    1.2%
                  </dd>
                </dl>
              </div>

              <div id="column-chart"></div>
              <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                <div className="flex justify-between items-center pt-5">
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="lastDaysdropdown"
                    data-dropdown-placement="bottom"
                    className="text-sm font-medium text-gray-400 dark:text-gray-400 hover:text-gray-100 text-center inline-flex items-center dark:hover:text-white"
                    type="button"
                  >
                    Last 7 days
                    <svg
                      className="w-2.5 m-2.5 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  <div
                    id="lastDaysdropdown"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Yesterday
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Today
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Last 7 days
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Last 30 days
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Last 90 days
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="#"
                    className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-300 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
                  >
                    Leads Report
                    <svg
                      className="w-2.5 h-2.5 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex-col w-[40%] sm:hidden lg:flex">
          <div className="flex flex-row w-full h-16 justify-end mt-5">
            <div className="flex flex-row items-center pr-12 ">
              <img src={profile} className="w-12 h-12 rounded-full mr-4" />
              <h1 className="font-inter font-medium cursor-pointer">
                User
              </h1>
            </div>
          </div>
          <div className="pl-12">
            <h1 className="font-inter font-bold text-xl">Overview</h1>
            <div className="flex flex-col h-96">
              <div className="space-x-4 pt-4 py-4">
                <span className="cursor-pointer font-bold">All</span>
                <span className="cursor-pointer">Recent</span>
              </div>
              <span className="border-b border-gray-500 w-[90%] h-1"></span>
              <div className=" flex flex-col h-auto w-[90%] pt-3 items-center space-y-2">
                <div className="w-96 h-20 flex flex-row items-center">
                  <img src={profile} className="w-16 h-16 mr-4" />
                  <span className="text-center font-inter">Income</span>
                </div>
                <div className="w-96 h-20 flex flex-row items-center">
                  <img src={profile2} className="w-16 h-16 mr-4" />
                  <span className="text-center font-inter">Expenses</span>
                </div>
                <div className="w-96 h-20 flex flex-row items-center">
                  <img src={profile3} className="w-16 h-16 mr-4" />
                  <span className="text-center font-inter">Categories</span>
                </div>
                <div className="w-96 h-20 flex flex-row items-center">
                  <img src={profile4} className="w-16 h-16 mr-4" />
                  <span className="text-center font-inter">Reports</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80%] mt-14 self-center">
            <button className="border p-3 w-full rounded-md hover:bg-[#85CB9D]">
              Load More
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

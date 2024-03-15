import React from "react";
import Header from "../header";
import "animate.css";
import { UserButton } from "@clerk/nextjs";

function Flash_cards() {
  return (
    <div>
      <Header />
      <div className="w-[814px] m-auto flex flex-col ">
        <h1 className="">13/3/2024</h1>
        <div className="flex justify-between">
          <div className=" relative">
            <span className=" absolute bottom-4 left-7">
              <i className="fa-solid fa-copy text-white"></i>
            </span>
            <button
              type="button"
              className=" w-48 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Flashcards
            </button>
          </div>
          <div className=" relative">
            <span className=" absolute bottom-4 left-7">
              <i className="fa-brands fa-leanpub text-white"></i>
            </span>
            <button
              type="button"
              className=" w-48 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Learn
            </button>
          </div>
          <div className=" relative">
            <span className=" absolute bottom-4 left-7">
              <i className="fa-regular fa-clipboard text-white"></i>
            </span>
            <button
              type="button"
              className=" w-48 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Test
            </button>
          </div>
          <div className=" relative">
            <span className=" absolute bottom-4 left-7">
              <i className="fa-solid fa-hard-drive text-white"></i>
            </span>
            <button
              type="button"
              className=" w-48 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Match
            </button>
          </div>
        </div>
        <div className="w-[814px] h-[428px] bg-gray-500 m-auto flex flex-col p-6 border-none rounded-lg">
          <div className="flex justify-end gap-4">
            <span>
              <i className="fa-solid fa-pencil text-white text-sm"></i>
            </span>
            <span>
              <i className="fa-solid fa-volume-high text-white text-sm"></i>
            </span>
            <span>
              <i className="fa-solid fa-star text-white text-sm"></i>
            </span>
          </div>
          <div className="flex flex-1  justify-center items-center font-medium text-white text-4xl">
            Coolce
          </div>
        </div>
        <div className="flex justify-between items-center text-lg p-6 border-b-2 border-b-gray-300">
          <div>
            <span className="mr-3">
              <i className="fa-solid fa-play"></i>
            </span>
            <span>
              <i className="fa-solid fa-shuffle"></i>
            </span>
          </div>
          <div className="flex gap-5 justify-between items-center">
            <span className="text-4xl">
              <i className="fa-regular fa-circle-left"></i>
            </span>
            <div>
              <span>2</span>
              <span>/9</span>
            </div>
            <span className="text-4xl">
              <i className="fa-regular fa-circle-right"></i>
            </span>
          </div>
          <div>
            <span className="mr-5">
              <i className="fa-solid fa-gear"></i>
            </span>
            <span>
              <i className="fa-solid fa-expand"></i>
            </span>
          </div>
        </div>
        <div>
          <div className="flex gap-3">
            <UserButton />
            <div className="flex flex-col">
              <span className="text-xs">Created by</span>
              <span>jennie_Bui4</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flash_cards;

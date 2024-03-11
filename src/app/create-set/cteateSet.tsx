import React from "react";
import Header from "../header";

function CreateSet() {
  return (
    <div>
      <Header />
      <div className="px-10 py-3 w-[1220px] m-auto m-0 ">
        <form>
          <div>
            <span>Create a new study set</span>
            <button>Create</button>
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter a title, like 'Biology-chapter 22: Evolution'"
              required
            />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <textarea
                id="first_name"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-[114px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Add a descript..."
                required
              />
            </div>
            <div>
              <div className="flex">
                <input
                  type="text"
                  id="last_name"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="School name"
                  required
                />
                <span>
                  <i className="fa-solid fa-circle-exclamation"></i>
                </span>
              </div>

              <div className="flex mt-7">
                <input
                  type="number"
                  id="visitors"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Course"
                  required
                />
                <span>
                  <i className="fa-solid fa-circle-exclamation"></i>
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <i className="fa-solid fa-plus mr-2"></i> Submit
              </button>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <i className="fa-solid fa-plus mr-2"></i> Add diagram{" "}
                <i className="fa-solid fa-lock ml-2"></i>
              </button>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <i className="fa-regular fa-note-sticky mr-2"></i> Create from
                notes
              </button>
            </div>
            <div className="flex gap-7">
              <span className="border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full w-8 h-8 relative">
                <i className="fa-solid fa-gear absolute right-[5px] bottom-[6px]"></i>
              </span>
              <span className="border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full w-8 h-8 relative">
                <i className="fa-solid fa-repeat  absolute right-[6px] bottom-[6px]"></i>
              </span>
              <span className="border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full w-8 h-8 relative">
                <i className="fa-regular fa-keyboard  absolute right-[6px] bottom-[6px]"></i>
              </span>
            </div>
          </div>
          <div>
            <div className="flex justify-between px-5">
              <span>1</span>
              <div className="flex gap-7">
                <span>
                  <i className="fa-solid fa-sliders"></i>
                </span>
                <span>
                  <i className="fa-solid fa-trash"></i>
                </span>
              </div>
            </div>
            <hr />
            <div className="flex justify-between">
              <input type="text" placeholder="Enter term" />
              <input type="text" placeholder="spelling" />
              <input type="text" placeholder="Enter definition" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSet;

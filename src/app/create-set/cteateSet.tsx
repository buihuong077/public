"use client";
import React, { useState } from "react";
import Header from "../header";
import FormTerm from "../components/form/formTerm";
import axios from "axios";
import { BaseUrl } from "../fetchApi/baseUrl";

export type Forms = {
  id: number;
  enterTerm: string;
  spelling: string;
  meaning: string;
};

function CreateSet() {
  const [form, setForm] = useState<Forms[]>([
    { id: 1, enterTerm: "", spelling: "", meaning: "" },
    { id: 2, enterTerm: "", spelling: "", meaning: "" },
  ]);
  // const [errorValidate, setErrorValidate] = useState({});
  const [title, setTitle] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [testtera, setTestera] = useState("");
  const [schoolName, setSchoolName] = useState("");

  const postLession = async (id: number) => {
    const res = await axios.post(`${BaseUrl}/`, {
      id: form[id].id,
      title: title,
      testtera: testtera,
      schoolName: schoolName,
      option: {
        enterTerm: form[id].enterTerm,
        spelling: form[id].spelling,
        meaning: form[id].meaning,
      },
    });
  };

  const handleAddCard = () => {
    const newForm = {
      id: form.length + 1,
      enterTerm: "",
      spelling: "",
      meaning: "",
    };
    setForm((prevForm) => {
      return [...prevForm, newForm];
    });
  };

  const handleInputChange = (id: number, field: string, value: string) => {
    // console.log("id", id);
    // console.log("field", field);
    // console.log("value", value);
    setForm(
      (
        prevForm // prevForm là giá trị hiện tại của form
      ) =>
        prevForm.map(
          (
            form // map mảng form ra tìm object có id = id object cần sửa
          ) => (form.id === id ? { ...form, [field]: value } : form) // nếu form.id === id thì lưu giá trị mới, ngược lại thì giữ nguyên
        )
    );
  };
  const handleCreateCard = () => {
    let flag = true;
    if (!title) {
      flag = false;
      // setErrorTitle("please  read title");
      return;
    }
    if (!form[0].enterTerm) {
      flag = false;
      return;
    }
    if (!form[0].spelling) {
      flag = false;
      return;
    }
    if (!form[0].meaning) {
      flag = false;
      return;
    }
    if (!form[1].enterTerm) {
      flag = false;
      return;
    }
    if (!form[1].spelling) {
      flag = false;
      return;
    }
    if (!form[1].meaning) {
      flag = false;
      return;
    }
    if (flag === true) {
      alert("se gui api");
    }
    console.log("form", form);
    // postLession(form.id)
  };
  console.log("form", form);
  return (
    <div>
      <Header />
      <div className="px-10 py-3 w-[1220px] m-auto m-0 ">
        <form>
          <div className="flex justify-between items-center">
            <span className=" font-bold text-xl">Create a new study set</span>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-white dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Create
            </button>
          </div>
          <div className="py-4">
            <input
              type="text"
              id="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black outline-none "
              placeholder="Enter a title, like 'Biology-chapter 22: Evolution'"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            {errorTitle && <p className="text-rose-500">{errorTitle}</p>}
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <textarea
                id="first_name"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full h-[114px] p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black outline-none"
                placeholder="Add a descript..."
                onChange={(e) => {
                  setTestera(e.target.value);
                }}
              />
            </div>
            <div>
              <div className="flex border border-gray-200 rounded-lg dark:bg-white dark:border-gray-400">
                <input
                  type="text"
                  id="visitors"
                  className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black outline-none "
                  placeholder="School name"
                  onChange={(e) => {
                    setSchoolName(e.target.value);
                  }}
                />
                <span className="w-8 relative">
                  <i className="fa-solid fa-circle-exclamation absolute right-4 bottom-3"></i>
                </span>
              </div>

              <div className="flex mt-7 border border-gray-200 rounded-lg dark:bg-white dark:border-gray-400">
                <input
                  type="text"
                  id="visitors"
                  className="bg-white border border-gray-200 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black outline-none "
                  placeholder="Course"
                />
                <span className="w-8 relative">
                  <i className="fa-solid fa-circle-exclamation absolute right-4 bottom-3"></i>
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
        </form>

        <form>
          {form?.map((item: any, index: any) => {
            return (
              <FormTerm
                key={index}
                item={item}
                handleInputChange={handleInputChange}
                handleAddCard={handleAddCard}
                // errorValidate={errorValidate}
              />
            );
          })}
          <div className="bg-[#b6c5d6] flex mt-8 p-5 border-none rounded-xl justify-center">
            <button
              type="submit"
              onClick={handleAddCard}
              className="p-2 border-b-black border-b-4 font-bold text-lg"
            >
              + ADD CARD
            </button>
          </div>
          <div
            onClick={handleCreateCard}
            className="w-[100px] mb-6 m-auto bg-[#2d55ba] text-white flex mt-8 p-2 border-none rounded-xl justify-center"
          >
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateSet;

import React, { useState } from "react";

function FormTerm(props: any) {
  const [errorValid, setErrorValid] = useState("");
  const handleCreateCard = () => {
    // console.log(enterTerm, spelling, meaning);
    console.log("form", props.form);
  };
  return (
    <div>
      {props.form?.map((item: any, index: any) => {
        return (
          <div
            key={index}
            className=" p-3 bg-[#dbeef6] border-none rounded-xl mt-10"
          >
            <div className="flex justify-between p-4 border-b-black border-b-2">
              <span>{item?.id}</span>
              <div>
                <i className="fa-solid fa-underline"></i>
              </div>
              <div className="flex justify-between gap-6">
                <span>
                  <i className="fa-solid fa-server"></i>
                </span>
                <span>
                  <i className="fa-regular fa-trash-can"></i>
                </span>
              </div>
            </div>
            <div className="flex justify-between px-3 pb-6 pt-6">
              <div className="w-[300px] pt-4  py-3">
                <input
                  onChange={(e) => {
                    if (e.target.value.length < 0) {
                      setErrorValid(
                        "You cannot leave the field blank enterTerm"
                      );
                      return;
                    } else {
                      props.handleInputChange(
                        item?.id,
                        "enterTerm",
                        e.target.value
                      );
                    }
                  }}
                  value={item.enterTerm}
                  className="w-full border-b-black border-b-2 placeholder-black focus:border-b-[#f8ea12] focus:outline-none"
                  type="text"
                  placeholder="Enter term"
                />
                {errorValid && <p>{errorValid}</p>}
                <div className="flex justify-between mt-2 text-xs">
                  <span>TERM</span>
                  <span>CHOOSE LANGUAGE</span>
                </div>
              </div>
              <div className="w-[300px] pt-4">
                <input
                  onChange={(e) => {
                    props.handleInputChange(
                      item?.id,
                      "spelling",
                      e.target.value
                    );
                  }}
                  value={item.spelling}
                  className="w-full border-b-black border-b-2 placeholder-black focus:border-b-[#f8ea12] focus:outline-none"
                  type="text"
                  placeholder="Enter term"
                />

                <div className="flex justify-between mt-2 text-xs">
                  <span>DEFINITION</span>
                  <span>CHOOSE LANGUAGE</span>
                </div>
              </div>
              <div className="w-[300px] pt-4">
                <input
                  onChange={(e) => {
                    props.handleInputChange(
                      item?.id,
                      "meaning",
                      e.target.value
                    );
                  }}
                  value={item.meaning}
                  className="w-full border-b-black border-b-2 placeholder-black focus:border-b-[#f8ea12] focus:outline-none"
                  type="text"
                  placeholder="Enter term"
                />

                <div className="flex justify-between mt-2 text-xs">
                  <span>DEFINITION</span>
                  <span>CHOOSE LANGUAGE</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="bg-[#b6c5d6] flex mt-8 p-5 border-none rounded-xl justify-center">
        <button
          type="submit"
          onClick={props.handleAddCard}
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
    </div>
  );
}

export default FormTerm;

import React, { useState } from "react";

function FormTerm(props: any) {
  // console.log("errorValid", props.errorValid);

  return (
    <div
      className=" bg-[#b6c5d6] p-5 border-none rounded-xl mt-10 "
      key={props.index}
    >
      <div className="flex justify-between p-4 border-b-black border-b-2">
        <span>{props.item?.id}</span>
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
            className="w-full border-b-black border-b-2 placeholder-black focus:border-b-[#f8ea12] focus:outline-none"
            onChange={(e) => {
              props.handleInputChange(
                props.item?.id,
                "enterTerm",
                e.target.value
              );
            }}
            value={props.item.enterTerm}
            type="text"
            placeholder="Enter term"
            required
          />

          <div className="flex justify-between mt-2 text-xs">
            <span>TERM</span>
            <span>CHOOSE LANGUAGE</span>
          </div>
        </div>
        <div className="w-[300px] pt-4">
          <input
            onChange={(e) => {
              props.handleInputChange(
                props.item?.id,
                "spelling",
                e.target.value
              );
            }}
            value={props.item.spelling}
            className="w-full border-b-black border-b-2 placeholder-black focus:border-b-[#f8ea12] focus:outline-none"
            type="text"
            placeholder="Enter term"
            required
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
                props.item?.id,
                "meaning",
                e.target.value
              );
            }}
            value={props.item.meaning}
            className="w-full border-b-black border-b-2 placeholder-black focus:border-b-[#f8ea12] focus:outline-none"
            type="text"
            placeholder="Enter term"
            required
          />

          <div className="flex justify-between mt-2 text-xs">
            <span>DEFINITION</span>
            <span>CHOOSE LANGUAGE</span>
          </div>
        </div>
      </div>
    </div>
  );
}



export default FormTerm;

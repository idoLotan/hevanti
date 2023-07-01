import React, { useState } from 'react'

const CheckBox = ({id, name, onChange, label, checked, className}) => {


return (
<div className="ml-0 mt-2">
  <label className="flex items-center  cursor-pointer">
    <span className="mr-2 select-none">{label}</span>
    <input type="checkbox" id={id} checked={checked} onChange={onChange} name={name} value="yes" className="hidden" />
    <div className="relative">
      <div className="bg-white border-2 border-[#555FD9] w-4 h-4 flex justify-center items-center">
        <svg className="fill-current hidden w-3 h-3 text-blue-100 pointer-events-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" version="1.1" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(-9 -11)" fill="#FF7848" fill-rule="nonzero">
              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
            </g>
          </g>
        </svg>
      </div>
      <div className="absolute inset-0"></div>
    </div>
  </label>
</div>

  )
}

export default CheckBox
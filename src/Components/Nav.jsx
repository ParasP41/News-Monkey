import { ToggleSwitch } from "flowbite-react";
import { Navbar } from "flowbite-react";
import { useState } from "react";
// import { Link } from "react-router-dom";
export function Nav(props) {



  return (
    <Navbar className={`shadow-md rounded-none bg-${props.nbg} `} fluid rounded>
      <Navbar.Brand  >
        <a href="/" className= {`block md:text-3xl md:bg-transparent    text-xl font-bold md:p-0 text-${props.ntext} `} aria-current="page">NewsMonkey</a>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <div className="flex max-w-md  flex-col ml-14 items-start gap-4">
          <label className="inline-flex  items-center m cursor-pointer">
            <input onClick={props.handlerMode} type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className={`ms-3 text-sm  font-semibold text-${props.ntext}`}>{props.mode}</span>
          </label>
        </div>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse className={`text-${props.ntext}`} >
        <li>
          <a href="/sports" className="block py-2 px-3  rounded md:bg-transparent  hover:text-blue-600 md:text-[19px] font-bold md:p-0 " aria-current="page">Sports</a>
        </li>
        <li>
          <a href="/entertainment" className="block py-2 px-3 rounded md:bg-transparent md:hover:text-blue-600 md:text-[19px] font-bold md:p-0 " aria-current="page">Entertainment</a>
        </li>
        <li>
          <a href="/science" className="block py-2 px-3 rounded md:bg-transparent md:hover:text-blue-600 md:text-[19px] font-bold md:p-0 " aria-current="page">Science</a>
        </li>
        <li>
          <a href="/business" className="block py-2 px-3 rounded md:bg-transparent md:hover:text-blue-600 md:text-[19px] font-bold md:p-0 " aria-current="page">Business</a>
        </li>
        <li>
          <a href="/health" className="block py-2 px-3 rounded md:bg-transparent md:hover:text-blue-600 md:text-[19px] font-bold md:p-0 " aria-current="page">Health</a>
        </li>
      </Navbar.Collapse>
    </Navbar>
  );
}



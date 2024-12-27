import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
export function Nav(props) {
  return (
    <Navbar className='rounded-none w-full shadow-md' style={props.DarkNav} fluid rounded>
        <Link to="/" className='block md:text-3xl underline md:bg-transparent  text-[20px] font-bold md:p-0 ' aria-current="page">NewsMonkey</Link>
      <div className="flex md:order-2">
        <div className="flex max-w-md  flex-col ml-14 items-start gap-4">
          <label className="inline-flex  items-center m cursor-pointer">
            <input onClick={props.handlerMode} type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all peer-checked:bg-blue-600"></div>
            <span className='ms-3 text-sm  font-semibold  '>{props.mode}</span>
          </label>
        </div>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse >
        <li>
          <Link to="/sports" className="block underline py-2 px-3  rounded md:bg-transparent  hover:text-blue-600 md:text-[19px] font-bold md:p-0 " aria-current="page">Sports</Link>
        </li>
        <li>
          <Link to="/entertainment" className="block underline py-2 px-3 rounded md:bg-transparent md:hover:text-blue-600 md:text-[19px] font-bold md:p-0 " aria-current="page">Entertainment</Link>
        </li>
        <li>
          <Link to="/science" className="block underline py-2 px-3 rounded md:bg-transparent md:hover:text-blue-600 md:text-[19px] font-bold md:p-0 " aria-current="page">Science</Link>
        </li>
        <li>
          <Link to="/business" className="block underline py-2 px-3 rounded md:bg-transparent md:hover:text-blue-600 md:text-[19px] font-bold md:p-0 " aria-current="page">Business</Link>
        </li>
        <li>
          <Link to="/health" className="block underline py-2 px-3 rounded md:bg-transparent md:hover:text-blue-600 md:text-[19px] font-bold md:p-0 " aria-current="page">Health</Link>
        </li>
      </Navbar.Collapse>
    </Navbar>
  );
}



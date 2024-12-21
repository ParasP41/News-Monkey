import News from "./Components/News"
import { Nav } from "./Components/Nav"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
function App(props) {
  const [progress, setProgress] = useState();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <div >
          <News setProgress={setProgress} category="general"></News>
        </div>
      </div>,
    },
    {
      path: '/sports',
      element: <div>
        <div >
          <News setProgress={setProgress} category="sports"></News>
        </div>
      </div>,
    },
    {
      path: '/entertainment',
      element: <div>
        <div >
          <News setProgress={setProgress} category="entertainment"></News>
        </div>
      </div>,
    },
    {
      path: '/science',
      element: <div>
        <div >
          <News setProgress={setProgress} category="science"></News>
        </div>
      </div>,
    },
    {
      path: '/business',
      element: <div>
        <div >
          <News setProgress={setProgress} category="business"></News>
        </div>
      </div>,
    },
    {
      path: '/health',
      element: <div>
        <div >
          <News setProgress={setProgress} category="health"></News>
        </div>
      </div>,
    },
  ]);

    const [mode, setMode] = useState("Dark Mode");
    const [nbg ,setNbg]=useState("white")
    const [ntext ,setNtext]=useState("black")
    const handlerMode = () => {
      if (mode==="Dark Mode") {
        setMode("Light Mode")
        setNbg("black")
        setNtext("white")
        document.body.style.backgroundColor="#202020"
        document.body.style.color="white"
      }
      else {
        setMode("Dark Mode")
        setNbg("white")
        setNtext("black")
        document.body.style.backgroundColor="white"
        document.body.style.color="black"
      }
    }
  return (
    <>
      <Nav mode={mode} handlerMode={handlerMode} nbg={nbg} ntext={ntext}></Nav>
      <h1 className="text-center md:my-8 my-4 text-2xl md:text-4xl font-bold">Today's Top Headlines</h1>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
      <RouterProvider router={router}/>

    </>
  )
}

export default App








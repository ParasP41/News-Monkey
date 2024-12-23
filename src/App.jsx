import News from "./Components/News"
import { Nav } from "./Components/Nav"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
function App(props) {
  const [progress, setProgress] = useState();

  const [mode, setMode] = useState("Dark Mode");
  const [darkNav, setDarkNav] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [darkBody, setDarkBody] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const handlerMode = () => {
    if (mode === "Dark Mode") {
      setMode("Light Mode")
      setDarkNav({
        backgroundColor: "#262626",
        color: "white",
      })
      setDarkBody({
        backgroundColor: "#1a1a1a",
        color: "white",
      })
    }
    else {
      setMode("Dark Mode")
      setDarkNav({
        backgroundColor: "white",
        color: "black",
      })
      setDarkBody({
        backgroundColor: "white",
        color: "black",
      })
    }
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div>
        <div >
          <News setProgress={setProgress} DarkBody={darkBody} category="general"></News>
        </div>
      </div>,
    },
    {
      path: '/sports',
      element: <div >
        <div >
          <News setProgress={setProgress} DarkBody={darkBody} category="sports"></News>
        </div>
      </div>,
    },
    {
      path: '/entertainment',
      element: <div >
        <div >
          <News setProgress={setProgress} DarkBody={darkBody} category="entertainment"></News>
        </div>
      </div>,
    },
    {
      path: '/science',
      element: <div >
        <div >
          <News setProgress={setProgress} DarkBody={darkBody} category="science"></News>
        </div>
      </div>,
    },
    {
      path: '/business',
      element: <div >
        <div >
          <News setProgress={setProgress} DarkBody={darkBody} category="business"></News>
        </div>
      </div>,
    },
    {
      path: '/health',
      element: <div >
        <div >
          <News setProgress={setProgress} DarkBody={darkBody} category="health"></News>
        </div>
      </div>,
    },
  ]);

  return (
    <>
      <Nav  mode={mode} handlerMode={handlerMode} DarkNav={darkNav} ></Nav>
      <h1 className="text-center underline md:py-6 py-2 text-2xl md:text-4xl text-black h-full font-bold" style={darkBody}>Today's Top Headlines</h1>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <RouterProvider router={router} />

    </>
  )
}

export default App








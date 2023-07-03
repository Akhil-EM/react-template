import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userService } from "./services/users";

function App() {
  useEffect(()=>{
     userService.get()
                .then(users =>{
                  console.log(users);
                })
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Blogs/>} />
          <Route path="/users" element={<Users/>} /> */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

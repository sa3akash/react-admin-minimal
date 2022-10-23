import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import NewUser from "./pages/newUser/NewUser";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";

function App() {

  return (
    <div className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />} />
            <Route index element={<Home />} />
            
            <Route path="users">
              <Route index element={<List columns={userColumns}/>} />
              <Route path=":userId" element={<Single />} />
              <Route path="create" element={<NewUser/>}/>
            </Route>

            <Route path="hotels">
              <Route index element={<List columns={hotelColumns}/>} />
              <Route path=":hotelId" element={<Single />} />
              <Route path="create" element={<NewHotel/>}/>
            </Route>

            <Route path="rooms">
              <Route index element={<List columns={roomColumns}/>} />
              <Route path=":roomId" element={<Single />} />
              <Route path="create" element={<NewRoom />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

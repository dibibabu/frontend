import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import { Routes, Route, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Admin } from "./pages/AdminD/Admin";
import UserManagement from "./pages/UserManagement/UserManagement";
import PostsManagement from "./pages/PostsManagement/PostsManagement";
import Chat from "./pages/Chat/Chat.js";

function App() {

  const user = useSelector((state) => state.authReducer.authData)
  let admin = false
  if (user) {
    admin = user.user.isAdmin
    console.log(admin);
    // admin=false
  }


  return (

    <div className="App">
      <div className="blur" style={{ top: '--18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>

      <Routes>


        <Route path="/" element={user ? (admin ? <Navigate to="admin" /> : <Navigate to="home" />) : <Navigate to="auth" />} />
        <Route path="/home" element={user ? (admin ? <Admin /> : <Home />) : <Navigate to="../auth" />} />
        <Route path="/admin" element={admin ? <Admin /> : <Navigate to="../auth" />} />
        <Route path="/auth" element={user ? <Navigate to="../home" /> : <Auth />} />
        <Route path="/profile/:id" element={user ? <Profile /> : <Navigate to="../auth" />} />

         <Route path="/admin/user" element={user ? (admin ? <UserManagement /> : <Admin />) : <Navigate to="../auth" />} />
        <Route path="/post" element={user ? (admin ? <PostsManagement /> : <Admin />) : <Navigate to="../auth" />} />
        <Route path="/analytics" element={user ? (admin ? <PostsManagement /> : <Admin />) : <Navigate to="../auth" />} />
        <Route path="/chat" element={user ? <Chat /> : <Navigate to="../auth" />} />  

        
        {/* <Route path="/admin" element={ admin ? <Admin /> : <Navigate to="../auth" />} /> */}
        {/* <Route path="/hom/user" element={admin ? <UserManagement /> : <Navigate to="../auth" />} />
        <Route path="/post" element={admin ? <PostsManagement /> : <Navigate to="../auth" />} />
        <Route path="/analytics" element={admin ? <PostsManagement /> : <Navigate to="../auth" />} />
        <Route path="/chat" element={admin ? <Chat /> : <Navigate to="../auth" />} />  */}

      </Routes>



    </div>
  );
}

export default App;



// <Route path="/" element={user && !admin ? <Navigate to="home" /> : <Navigate to="auth" />} />
// <Route path="/home" element={user ? <Home /> : <Navigate to="../auth" />} />
// <Route path="/auth" element={user ? <Navigate to="../home" /> : <Auth />} />
// <Route path="/profile/:id" element={user ? <Profile /> : <Navigate to="../auth" />} />


// <Route path="/admin" element={user && admin ? <Admin /> : <Navigate to="../auth" />} />
// <Route path="/admin/user" element={user ? <UserManagement /> : <Navigate to="../auth" />} />
// <Route path="/post" element={user ? <PostsManagement /> : <Navigate to="../auth" />} />
// <Route path="/analytics" element={user ? <PostsManagement /> : <Navigate to="../auth" />} />
// <Route path="/chat" element={user ? <Chat /> : <Navigate to="../auth" />} />
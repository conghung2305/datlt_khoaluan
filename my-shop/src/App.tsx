import { Routes, Route } from "react-router-dom";
import HomePage from "./client/pages/Homepage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./admin/layouts/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";

import Contact from "./admin/pages/Contact";
import Booking from "./admin/pages/Booking";
import PrivateRoute from "./author/PrivatePolicy";
import ListTitle from "./admin/pages/messageTitle/list";
import Members from "./admin/pages/Members";
import Menu from "./client/pages/Menu";
import ListProducts from "./admin/pages/products/list";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/menu" element={<Menu/>} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ListProducts/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="booking" element={<Booking />} />
          <Route path="messageTitle" element={<ListTitle />} />
          <Route path="members" element={<Members />} />
        </Route>

        <Route
          path="*"
          element={
            <div className="text-center mt-20">404 - Trang không tồn tại</div>
          }
        />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;

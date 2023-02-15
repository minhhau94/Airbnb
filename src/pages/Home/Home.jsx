/* eslint-disable react-hooks/exhaustive-deps */
import { Cards } from "component/Cards/Cards";
import Filter from "component/Filter/Filter";
import Footer from "component/Footer/Footer";
import NavBar from "component/Header/NavBar";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getAllRentalRoomAction } from "redux/actions/RetalRoomAction";
import RoomList from "component/RoomList/RoomList"
import Loader from "component/Loader/Loader"

export default function HomeTemplate() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);


  return (
    <div>
      {loading ? (
         <Loader />
      ) : (
        <div className="container m-auto">
          <div
        style={{
          position: "sticky",
          top: "0",
          zIndex: "30",
          backgroundColor: "white",
        }}
      >
        <NavBar></NavBar>
        <Filter></Filter>
      </div>
      <RoomList />
      <Outlet></Outlet>
      <Footer />
        </div>
      )}
    </div>
  );
}

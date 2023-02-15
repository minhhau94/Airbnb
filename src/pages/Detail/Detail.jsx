
import Footer from "component/Footer/Footer";
import NavBar from "component/Header/NavBar";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RoomDetail from "component/RoomDetail/RoomDetail";

const Detail = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="container m-auto">
      <div className="shadow-md">
        <NavBar />
      </div>
      <RoomDetail paramsId={id} />
      <Footer />
    </div>
  );
};

export default Detail;

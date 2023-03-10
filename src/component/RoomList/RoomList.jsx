import { Cards } from "component/Cards/Cards";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRentalRoomAction } from "redux/actions/RetalRoomAction";


export default function Home() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRentalRoomAction());
    
  }, []);
  const AllRoom = useSelector((state) => state.RoomReducers.getAllRenderRoom);

  return (
    <div className="px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
      {AllRoom.map((item) => {
        return <Cards key={item.id} className="" room={item}></Cards>;
      })}
    </div>
  );
}

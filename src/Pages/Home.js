import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MyCard from "../Components/Card/MyCard";
import Navbar from "../Layout/Header/Navbar/Navbar";
import { deleteNote } from "../Store/action/note";

function Home() {
  const myState = useSelector((state) => state.note.notes);
  const dispatch = useDispatch();
  
  return (
    <div>
      <Navbar></Navbar>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "80%",
            margin: "30px 0",
            display: "flex",
            flexWrap: "wrap",
            gap: "8.3%",
          }}
        >
        
          {
            myState.length > 0 ? (
            <>
              {myState?.map((value, index) => {
                return (
                  <MyCard
                    key={index + 1}
                    id={myState[index].id}
                    name={myState[index].name}
                    description={myState[index].description}
                    image="asdf"
                  />
                );
              })}
            </>
          ) : (
            <>
              <h2>Please add note</h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

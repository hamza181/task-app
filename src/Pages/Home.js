import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MyCard from "../Components/Card/MyCard";
import Navbar from "../Layout/Header/Navbar/Navbar";

function Home() {
  const myState = useSelector((state) => state.note.notes);
  const [isStateEmpty, setIsStateEmpty] = useState(false);
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
          {!isStateEmpty ? (
            <>
              {myState.map((value, index) => {
                return (
                  <Link to={`/note/${index + 1}`}>
                    <MyCard
                      key={index + 1}
                      name={myState[index].name}
                      description={myState[index].description}
                      image="asdf"
                    />
                  </Link>
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

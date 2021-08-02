import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MyCard from "../Components/Card/MyCard";
import Navbar from "../Layout/Header/Navbar/Navbar";

function Home() {
  const myState = useSelector((state) => state.note);
  console.log(myState);
  const isStateEmpty = false;
  return (
    <div>
      <Navbar></Navbar>
      <Link to="/note">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "80%", margin: "30px 0" }}>
            {!isStateEmpty ? (
              <>
                {myState.map((value, index) => {
                  return (
                    <MyCard
                      key={index}
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
      </Link>
    </div>
  );
}

export default Home;

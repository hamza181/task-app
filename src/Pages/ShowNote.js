import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";
import MyForm from "../Components/Form/MyForm";
import Navbar from "../Layout/Header/Navbar/Navbar";

function ShowNote() {
  return (
    <div>
      <Navbar></Navbar>
      {/* <h1>show note</h1> */}
      <div
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          title="Name"
          style={{
            width: "80%",
            margin: "30px 0",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <Card
            type="inner"
            title="Description"
            style={
              {
                //   width: "80%",
              }
            }
          >
            Description here
          </Card>
          <div
            style={{ marginTop: 25, display: "flex", justifyContent: "center" }}
          >
            <img
              src="https://picsum.photos/900/400"
              style={{ maxWidth: "60%", maxHeight: "800px" }}
              //   type="inner"
              //   title="Image"
            ></img>
          </div>
          <div
            style={{
              marginTop: "45px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "30%",
              }}
            >
              <Button type="primary" size="large" icon={<EditOutlined />}>
                Edit
              </Button>
              <Button type="danger" size="large" icon={<DeleteOutlined />}>
                Delete
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ShowNote;

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import MyForm from "../Components/Form/MyForm";
import Navbar from "../Layout/Header/Navbar/Navbar";
import { deleteNote, getParticularNote } from "../Store/action/note";

function ShowNote() {

  // get id of route --- note/id
  let {id} = useParams()
  const history = useHistory()

  const dispatch = useDispatch()
  const getNode = useSelector(state => state.note.particularNote)

  function deleteNotes(){
    // console.log('delete');
    dispatch(deleteNote(id))
    history.push(`/`)

  }

  useEffect(() => {
      dispatch(getParticularNote(id))
  }, [])
  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          title={getNode?.name}
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
            {getNode?.description}
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
              <Button type="danger" size="large" icon={<DeleteOutlined />} onClick={deleteNotes}>
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

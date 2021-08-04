import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteNote } from "../../Store/action/note";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

function MyCard(props) {
  const dispatch = useDispatch();
  const history = useHistory()

  function deleteNotes(e) {
    e.stopPropagation();
    // console.log('delete');
    dispatch(deleteNote(props.id))
  }

  function editNotes(e){
    e.stopPropagation();
    console.log('edit');
    history.push(`/edit-note/${props.id}`)
  }

  return (
    <div style={{ marginBottom: "50px" }}>
      <Card
        style={{
          width: 300,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        // cover={
        //   <img
        //     alt="example"
        //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        //   />
        // }
        actions={[
          //   <SettingOutlined key="setting" />,
          <EditOutlined key="edit" onClick={editNotes}/>,
          <DeleteOutlined key="delete" onClick={deleteNotes} />,
        ]}
        onClick={() => {
          console.log(props.id);
          history.push(`/note/${props.id}`);
        }}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={props.name}
          description={props.description}
          id={props.id}
        />
      </Card>
    </div>
  );
}

export default MyCard;

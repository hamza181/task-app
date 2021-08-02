import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

function MyCard(props) {
  return (
    <div style={{display: "flex", msFlexDirection: "row"}}>
      <Card
        style={{ width: 300,
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
         }}
        // cover={
        //   <img
        //     alt="example"
        //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        //   />
        // }
        actions={[
        //   <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <DeleteOutlined key='delete' />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={props.name}
          description={props.description}
        />
      </Card>
    </div>
  );
}

export default MyCard;

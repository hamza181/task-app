import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Upload,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

function MyForm() {

  const dispatch = useDispatch()
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form
        style={{
          width: "80%",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          paddingTop: "45px",
          paddingBottom: "30px",
          margin: '33px 0',
        }}
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 14,
        }}
        // colon={false}
        size="large"
      >
        <Form.Item label="Name">
          <Input />
        </Form.Item>

        <Form.Item label="Description">
          <Input.TextArea rows={8} />
        </Form.Item>

        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="fileList"
          //   getValueFromEvent={normFile}
          //   extra="longgggggggggggggggggggggggggggggggggg"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 5 }}>
          <Button type="primary">Add Note</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default MyForm;

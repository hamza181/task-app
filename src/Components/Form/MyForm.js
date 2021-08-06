import React, { useState, useEffect } from "react";
import { Form, Input, message, Button, Upload } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addNote, editNote } from "../../Store/action/note";
import { Redirect, useHistory, useParams } from "react-router-dom";
import axios from "axios";

function MyForm() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const myState = useSelector((state) =>
    state.note.notes?.filter((e) => e.id == id)
  );
  // console.log(myState);
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();
  const history = useHistory();
  console.log(id);
  useEffect(() => {
    if (id) {
      setName(myState[0]?.name);
      setDescription(myState[0]?.description);
    } else {
      setName("");
      setDescription("");
    }
  }, [id]);
  // console.log(myState[id-1]?.name);
  function addNotes() {

    // for image upload
    // axios.post('')

    const body = {
      name: name,
      description: description,
      image: image,
    };

    dispatch(addNote(body));

    history.push(`/`);
  }

  function editNotes() {
    const body = {
      id: id,
      name: name,
      description: description,
      image: image,
    };

    dispatch(editNote(body));
    // console.log(body);
    history.push(`/`);
  }
  console.log({ name });
  console.log({ description });

  // for upload

  const upload = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info);
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Form
        style={{
          width: "80%",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          paddingTop: "45px",
          paddingBottom: "30px",
          margin: "33px 0",
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
          <Input onChange={(e) => setName(e.target.value)} value={name} />
        </Form.Item>

        <Form.Item label="Description">
          <Input.TextArea
            rows={8}
            onChange={(e) => setDescription(e.target.value)}
            // value={myState[id-1]?.description}
            value={description}
          />
        </Form.Item>

        <Form.Item
          name="upload"
          label="Upload"
          // valuePropName="fileList"
          //   getValueFromEvent={normFile}
          //   extra="longgggggggggggggggggggggggggggggggggg"
        >
          <Upload {...upload}>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 5 }}>
          {id ? (
            <>
              <Button type="primary" onClick={editNotes}>
                Edit Note
              </Button>
            </>
          ) : (
            <>
              <Button type="primary" onClick={addNotes}>
                Add Note
              </Button>
            </>
          )}
        </Form.Item>
      </Form>
    </div>
  );
}

export default MyForm;

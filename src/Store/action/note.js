import * as constant from "../constant/note";

export function addNote(body) {
  return {
    type: constant.ADDNOTE,
    payload: body,
  };
}

export function editNote(body) {
  // console.log(body);
  return {
    type: constant.EDITNOTE,
    payload: body,
  };
}

export function deleteNote(id) {
  console.log(id);
  return {
    type: constant.DELETENOTE,
    payload: id,
  };
}

export function getParticularNote(id) {
  return {
    type: constant.GETNOTE,
    payload: id,
  };
}

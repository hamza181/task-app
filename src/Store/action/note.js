import * as constant from "../constant/note";

export function addNote(body) {
  return {
    type: constant.ADDNOTE,
    payload: body,
  };
}

export function editNote() {
  return {
    type: constant.EDITNOTE,
  };
}

export function deleteNote() {
  return {
    type: constant.DELETENOTE,
  };
}

export function getParticularNote(id) {
  return {
    type: constant.GETNOTE,
    payload: id
  };
}

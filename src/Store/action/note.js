import * as constant from "../constant/note";

export function addNote() {
  return {
    type: constant.ADDNOTE,
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
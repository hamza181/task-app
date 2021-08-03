import { deleteNote } from "../action/note";
import * as constant from "../constant/note";

const initialState = {
  notes: [
    {
      id: 1,
      name: "Task1",
      description: "My description",
      image: "asdf",
    },
    // {
    //   id: 2,
    //   name: "Task2",
    //   description: "My des",
    //   image: "oasidf",
    // },
    // {
    //   id: 3,
    //   name: "Task3",
    //   description: "My des",
    //   image: "oasidf",
    // },
    // {
    //   id: 4,
    //   name: "Task4",
    //   description: "My des",
    //   image: "oasidf",
    // },
  ],
  particularNote: null,
};

export const note = (state = initialState, action) => {
  if (action.type === constant.ADDNOTE) {
    const tempPayload = { ...action.payload, id: state.notes.length + 1 };
    const newNotes = [...state.notes, tempPayload];
    return {
      ...state,
      notes: newNotes,
    };
  }
  if (action.type === constant.GETNOTE) {
    const getParticularNote = state.notes.find((obj) => {
      return obj.id == action.payload;
    });

    return {
      ...state,
      particularNote: getParticularNote,
    };
  }
  if (action.type === constant.DELETENOTE) {
    const deletedNote = state.notes.filter((ele) => ele.id != action.payload);
    console.log(state);
    return {
      ...state,
      notes: deletedNote
    };
  }

  return state;
};

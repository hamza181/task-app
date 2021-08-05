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
    {
      id: 2,
      name: "Task2",
      description: "My des",
      image: "oasidf",
    },
    {
      id: 3,
      name: "Task3",
      description: "My des",
      image: "oasidf",
    },
    {
      id: 4,
      name: "Task4",
      description: "My des",
      image: "oasidf",
    },
  ],
  particularNote: null,
};

export const note = (state = initialState, action) => {
  if (action.type === constant.ADDNOTE) {
    const id = new Date().getTime();

    const tempPayload = { ...action.payload, id: id + 1 };
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
    const updatedNote = state.notes.filter((ele) => ele.id != action.payload);
    console.log(state);
    return {
      ...state,
      notes: updatedNote,
    };
  }
  if (action.type === constant.EDITNOTE) {
    console.log(action.payload);
    const array = [...state.notes];
    const newNote = array.filter((e) => e.id == action.payload.id);

    newNote[0].name = action.payload.name;
    newNote[0].description = action.payload.description;
    newNote[0].image = action.payload.image;

    // array.splice(kis index par update karna ha, index update k bad kitne element remove karne hen, new element )
    // array.splice(action.payload.id - 1, 1, newNote[0]);
    array.concat(array, newNote);

    // console.log(array);

    return {
      ...state,
      notes: array,
    };
  }

  return state;
};

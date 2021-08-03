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
  counter: 4,
  particularNote: null,
};

export const note = (state = initialState, action) => {
  if (action.type === constant.ADDNOTE) {
    const tempPayload = { ...action.payload, id: state.counter + 1 };
    const newNotes = [...state.notes, tempPayload];
    return {
      ...state,
      notes: newNotes,
      counter: state.counter + 1,
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
  if(action.type === constant.DELETENOTE){
    console.log('delete note');
    return {}

  }

  return state;
};

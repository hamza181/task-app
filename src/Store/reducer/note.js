import * as constant from "../constant/note";

const initialState = [
  {
    name: "Task1",
    description: "My description",
    image: 'asdf'
  },
  {
    name: "Task2",
    description: "My des",
    image: 'oasidf'
  },
];

export const note = (state = initialState, action) => {
  // if(action.type === constant.ADDNOTE){
  //     return {
  //         ...state,

  //     }
  // }
  return state;
};

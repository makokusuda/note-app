const notes = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_NOTES":
      return { ...state, notes: action.notes };
    case "CHOOSE_BODY":
      return { ...state, text: action.text };
    case "CHOOSE_ID":
      return { ...state, id: action.id };
    default:
      return state;
  }
};

export default notes;

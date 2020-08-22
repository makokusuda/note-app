const notes = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_NOTES":
      return { ...state, notes: action.notes };
    case "CHOOSE_NOTE":
      return { ...state, text: action.text };
    default:
      return state;
  }
};

export default notes;

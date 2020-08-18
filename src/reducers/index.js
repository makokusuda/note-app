const notes = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_NOTES":
      return { ...state, notes: action.notes };
    default:
      return state;
  }
};

export default notes;

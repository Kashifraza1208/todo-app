// In summary, the action first reaches the dispatcher, and then it's handled by the reducer. The reducer's responsibility is to update the state based on the action it receives.

export const addTask = (text) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: new Date().getTime(),
      text: text,
    },
  };
};

export const delteTask = (id) => {
  return {
    type: "REMOVE_TASK",
    payload: id,
  };
};

const colorPicker = (id) => {
  switch (id % 3) {
    case 0:
      return "green";
    case 1:
      return "blue";
    default:
      return "orange";
  }
};

export { colorPicker };

export default (state=[], action) => {
  switch (action.type) {
    case 'RANDOMPETID':
      console.log(action.payload);
      //break;
    default:
      return state;
  }
}

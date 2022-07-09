let initialState = [
  {
    title: 'Buy a Bike',
    key: '0',
  },
  {
    title: 'Buy a Car',
    key: '1',
  },
  {
    title: 'Buy a House',
    key: '2',
  },
  {
    title: 'Buy a Banglow',
    key: '3',
  },
  {
    title: 'Buy a Farm House',
    key: '4',
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todoReducer;

//define the data structure
export const user = {
  friends: [1, 2, 3],
  blocked: [],
  id: 1,
  userName: "dddadasdsa",
};

export const allUsers = [
  { id: 1, userName: "Sally", image: "" },
  { id: 2, userName: "Tom", image: "" },
  { id: 3, userName: "Andy", image: "" },
];

export const messages = [
  { fromId: 1, toId: 2, content: "1Hi", sendDate: 12345678 },
  { fromId: 2, toId: 1, content: "2Hi back to you!", sendDate: 12345678 },
  { fromId: 1, toId: 3, content: "3Hi", sendDate: 12345678 },
  { fromId: 3, toId: 1, content: "4Hi back to you!", sendDate: 12345678 },
  { fromId: 3, toId: 2, content: "5Hi", sendDate: 12345678 },
  { fromId: 2, toId: 3, content: "6Hi back to you!", sendDate: 12345678 },
];

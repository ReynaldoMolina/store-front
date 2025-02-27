const baseUrl = 'http://192.168.1.7:3001/api/v1/';
// const baseUrl = 'https://jahairastore-api.vercel.app/api/v1/';

const menuOptionsList = [
  {
    id: 0,
    name: "Home",
    divider: true
  },
  {
    id: 1,
    name: "Clients",
    url: baseUrl + 'clients/',
    divider: false
  },
  {
    id: 2,
    name: "Orders",
    url: baseUrl + 'orders/',
    divider: false
  },
  {
    id: 3,
    name: "Receipts",
    url: baseUrl + 'sales/',
    divider: true
  },
  {
    id: 4,
    name: "Providers",
    url: baseUrl + 'providers/',
    divider: false
  },
  {
    id: 5,
    name: "Purchases",
    url: baseUrl + 'purchases/',
    divider: false
  },
  {
    id: 6,
    name: "Expenses",
    url: baseUrl + 'expenses/',
    divider: true
  },
  {
    id: 7,
    name: "Products",
    url: baseUrl + 'products/',
    divider: false
  },
  {
    id: 8,
    name: "Categories",
    url: baseUrl + 'categories/',
    divider: true
  },
  // {
  //   id: 9,
  //   name: "Finances",
  //   url: baseUrl + 'finances/',
  //   divider: true
  // },
  {
    id: 9,
    name: "Settings",
    divider: false
  },
  {
    id: 10,
    name: "Log out",
    divider: false
  }
];

export { menuOptionsList, baseUrl };

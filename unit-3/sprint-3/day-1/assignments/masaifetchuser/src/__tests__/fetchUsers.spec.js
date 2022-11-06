const { getUsersData, splitData } = require("../fetchUsers");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
global.score = 1;
// jest.setTimeout(10000);

jest.dontMock("fs");

describe("fetch list of users", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
    fetch.resetMocks();
  });

  it("Total pages returned have the correct length", function (done) {
    fetch.mockResponse(JSON.stringify(res));
    getUsersData()
      .then((res) => {
        const { data, totalPages } = res;
        const c = splitData(data, totalPages);

        expect(c.totalPages).toBe(20);
        expect(fetch).toBeCalledWith(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users"
        );
        global.score += 1;
        done();
      })
      .catch((err) => console.log(err));
  });

  it("data1 and data2 are returned with correct values", function (done) {
    fetch.mockResponse(JSON.stringify(res));
    getUsersData()
      .then((res) => {
        const { data, totalPages } = res;
        const c = splitData(data, totalPages);

        expect(JSON.stringify(c.data1)).toBe(JSON.stringify(res.data[0]));
        expect(JSON.stringify(c.data2)).toBe(JSON.stringify(res.data[1]));
        expect(fetch).toBeCalledWith(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users"
        );
        global.score += 2;
        done();
      })
      .catch((err) => console.log(err));
  });

  it("data3 is returned with correct values", function (done) {
    fetch.mockResponse(JSON.stringify(res));
    getUsersData()
      .then((response) => {
        const { data, totalPages } = response;
        const c = splitData(data, totalPages);
        expect(c.data3.length).toBe(3);
        c.data3.map((item, index) => {
          expect(JSON.stringify(item)).toEqual(
            JSON.stringify(res.data[index + 2])
          );
        });
        expect(fetch).toBeCalledWith(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users"
        );
        global.score += 2;
        done();
      })
      .catch((err) => console.log(err));
  });

  it("data1 and data2 are returned with correct values-2", function (done) {
    fetch.mockResponse(JSON.stringify(res2));
    getUsersData()
      .then((res) => {
        const { data, totalPages } = res;
        const c = splitData(data, totalPages);

        expect(JSON.stringify(c.data1)).toBe(JSON.stringify(res2.data[0]));
        expect(JSON.stringify(c.data2)).toBe(JSON.stringify(res2.data[1]));
        expect(fetch).toBeCalledWith(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users"
        );
        global.score += 2;
        done();
      })
      .catch((err) => console.log(err));
  });

  it("data3 is returned with correct values-2", function (done) {
    fetch.mockResponse(JSON.stringify(res2));
    getUsersData()
      .then((response) => {
        const { data, totalPages } = response;
        const c = splitData(data, totalPages);
        expect(c.data3.length).toBe(8);

        c.data3.map((item, index) => {
          expect(JSON.stringify(item)).toEqual(
            JSON.stringify(res2.data[index + 2])
          );
        });
        expect(fetch).toBeCalledWith(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users"
        );
        global.score += 2;
        done();
      })
      .catch((err) => console.log(err));
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});

let res = {
  data: [
    {
      createdAt: "2022-07-03T08:29:08.409Z",
      name: "Alexandra Corwin IV",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1195.jpg",
      id: "17",
    },
    {
      createdAt: "2022-07-03T01:33:30.078Z",
      name: "Allen Hodkiewicz",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/933.jpg",
      id: "25",
    },
    {
      createdAt: "2022-07-03T01:48:43.291Z",
      name: "Amelia White",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/890.jpg",
      id: "76",
    },
    {
      createdAt: "2022-07-02T12:52:11.754Z",
      name: "Andres McClure",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/711.jpg",
      id: "4",
    },
    {
      createdAt: "2022-07-02T17:24:44.929Z",
      name: "Angelica Ernser Sr.",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/622.jpg",
      id: "13",
    },
  ],
  totalPages: 20,
};
let res2 = {
  data: [
    {
      id: 1,
      name: "Abram Langtry",
      image: "https://imgur.com/9xEcfJj",
      department: "Training",
      gender: "female",
      salary: 95000,
    },
    {
      id: 2,
      name: "Flossy Arrell",
      image: "https://imgur.com/9xEcfJj",
      department: "Product Management",
      gender: "others",
      salary: 20000,
    },
    {
      id: 3,
      name: "Giorgio Antonioni",
      image: "https://imgur.com/9xEcfJj",
      department: "Business Development",
      gender: "others",
      salary: 95000,
    },
    {
      id: 4,
      name: "Benji Knapman",
      image: "https://imgur.com/9xEcfJj",
      department: "Research and Development",
      gender: "male",
      salary: 15000,
    },
    {
      id: 5,
      name: "Thedrick Sigfrid",
      image: "https://imgur.com/9xEcfJj",
      department: "Product Management",
      gender: "others",
      salary: 115000,
    },
    {
      id: 6,
      name: "Leonora Pachmann",
      image: "https://imgur.com/9xEcfJj",
      department: "Training",
      gender: "male",
      salary: 140000,
    },
    {
      id: 7,
      name: "Wait Hayworth",
      image: "https://imgur.com/9xEcfJj",
      department: "Services",
      gender: "others",
      salary: 80000,
    },
    {
      id: 8,
      name: "Kalina Bispo",
      image: "https://imgur.com/9xEcfJj",
      department: "Business Development",
      gender: "male",
      salary: 60000,
    },
    {
      id: 9,
      name: "Nevile Logan",
      image: "https://imgur.com/9xEcfJj",
      department: "Support",
      gender: "female",
      salary: 145000,
    },
    {
      id: 10,
      name: "Tiffani Deshorts",
      image: "https://imgur.com/9xEcfJj",
      department: "Business Development",
      gender: "others",
      salary: 40000,
    },
  ],
  totalPages: 7,
};

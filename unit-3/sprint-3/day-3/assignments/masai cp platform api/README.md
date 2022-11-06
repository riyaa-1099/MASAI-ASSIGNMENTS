# JS-ES6-fetch-users

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Total pages returned have the correct length- 1 mark
 ✅ data1 and data2 are returned with correct values - 2 marks
 ✅ data3 is returned with correct values - 2 marks
 ✅ data1 and data2 are returned with correct values-2 - 2 marks
 ✅ data3 is returned with correct values-2 -2 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Folder structure

- index.html
- src
  - fectchUsers.js
  - `__tests__`
    - fectchUsers.spec.js
- README.md
- package.json

## Description

- You need to the following API for this problem

  - BaseURL: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-users`

- Complete the two given function such that it fulfills the below criteria:

- `getUsersData`

  1.  Fetch the data of users from the given URL using try-catch
  2.  Return the data if it is successfully fetched, otherwise return an error message

- `splitData`

  1.  This function needs to be called with two arguments:

      - The data of users, and total pages returned by the getUsersData function but as two different arguments

  2.  The `splitData` function will accept only 1 parameter, so you need to bind your parameters such that it accepts both arguments combined into one (Hint: use rest operator)

  3.  Now extract the two values (by destructuring only) :

      - data: this will contain the data of users
      - totalPages: this will contain the total pages

  4.  From the data value extracted, you need to extract and create the following values (by destructuring only):

      - data1: this will contain the first user object data from the list of users
      - data2: this will contain the second user object data from the list of users
      - data3: this will contain the list of all the remaining user's data

  5.  Return totalPages, data1, data2, data3 at the end of the function

**Note** : Create both the function independent of each other (do not call splitData function inside getUsersData function- though you can do this to check yout output). Also, you do not need to append anything to the DOM. (The html file is given for you to make use of console or network tab)
**Note:- Do not use any other names for the methods other than those mentioned.**

####

## Boilerplate

- Do not change the given folder structure
- index.html
- You can find JS code under src folder in a filename fetchUsers.js
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time

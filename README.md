# Email Client - README

## Frameworks and Libraries
- React
- Redux
- Axios

## Project Setup

Followed this URL to get the boilerplate code - [React-Redux](https://redux-toolkit.js.org/tutorials/quick-start)

running `npm install @reduxjs/toolkit react-redux` will create a simple counter project with both the tools

## File Structure
```plaintext

|__src
   |__App.js
   |__index.js
   |__app
      |__store.js // holds applications state
   |__Features (dir) 
      |__EmailClient (dir)
        |__components (dir)
            |__ // react componets
        |__EmailAPI // global functions for API calls
        |__EmailSlice.js //uses createSlice method for actions and reducers
```

Following files are crucial to set up our state management

- store.js
- EmailSlice.js
    - This file uses the CreateSlice method provided by Redux to create actions and reducers for the application
        - Actions - Contains the information about the type of action to dispatch 
        - Reducer - Contains logic of the action that is supposed to be dispatched
    - This file also helps to make Async API calls, which eliminates our dependency on useEffect to make API calls


Browser localstorage is used to manage the status of emails, like read, unread, favourite.


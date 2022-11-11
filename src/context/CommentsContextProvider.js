// import axios from "axios";
// import React, { createContext, useReducer } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// export const commentsContext = createContext(); // облако

// const API = "http://localhost:8000/product";

// const INIT_STATE = {
//   comments: null,
//   commentDetails: null,
//   // pageTotalCount: 1,
// };

// function reducer(prevState, action) {
//   switch (action.type) {
//     case "GET_COMMENT":
//       return {
//         ...prevState,
//         comment: action.payload.data,
//         // pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 3),
//       };
//     case "GET_ONE_COMMENT":
//       return { ...prevState, commentDetails: action.payload };
//     default:
//       return prevState;
//   }
// }

// const CommentsContextProvider = ({ children }) => {
//   const [state1, dispatch] = useReducer(reducer, INIT_STATE);
//   const location = useLocation();

//   const navigate = useNavigate();

//   // create
//   async function addcomment(newComment) {
//     try {
//       await axios.post(API, newComment);
//     } catch (error) {
//       return error;
//     }
//   }

//   //   read
//   // console.log(location.search);

//   // delete
//   async function deleteComment(id) {
//     try {
//       await axios.delete(`${API}/${id}`);
//       // readComment();
//       navigate("/list");
//     } catch (error) {
//       return error;
//     }
//   }

//   let cloud = {
//     addcomment,
//     // readComment,
//     // readOneComment,
//     deleteComment,
//     commentssArr: state1.comment,
//     commentsDetails: state1.commentsDetails,
//     pageTotalCount: state1.pageTotalCount,
//   };

//   return (
//     <commentsContext.Provider value={cloud}>
//       {children}
//     </commentsContext.Provider>
//   );
// };

// export default CommentsContextProvider;

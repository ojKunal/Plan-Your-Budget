import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyAGVz7a6Rpah1gNS7BbLivh4GNEJqD5N68",
  authDomain: "budget-planner-app-2d247.firebaseapp.com",
  projectId: "budget-planner-app-2d247",
  storageBucket: "budget-planner-app-2d247.appspot.com",
  messagingSenderId: "710829185205",
  appId: "1:710829185205:web:a50378704e285d9f4586fc",
  measurementId: "G-L1T35M2WS4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

import { db } from "./auth";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

interface Users {
    isUser: boolean;
    id: number;
    username: string
}
// const usersRef = collection(db, "users") // unutma doc document collection ise collection sorgular
// const q = query(usersRef, where("isUser", "==", true))




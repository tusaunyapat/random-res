import React from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { db } from "./Firebase";
let resList = []; // Declare resList outside of the function

async function getRestaurant() {
  try {
    const resCol = collection(db, "restaurant");
    const resSnapshot = await getDocs(resCol);
    resList = resSnapshot.docs.map((doc) => doc.data());
    //console.log("Restaurant data loaded successfully:", resList);
  } catch (error) {
    console.error("Error fetching restaurants:", error);
  }
}

// Call the function to fetch restaurant data

export { resList, getRestaurant };

import React, { useState } from "react";
import { db } from "./Firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function AddRestaurant() {
  const [restaurantName, setRestaurantName] = useState("");
  const [isSamyan, setIsSamyan] = useState(false);
  const [isSiam, setIsSiam] = useState(false);

  const handleAddRestaurant = () => {
    // Prepare restaurant data
    const restaurantData = {
      name: restaurantName,
      samyan: isSamyan,
    };

    // Add restaurant to Siam location if the checkbox is checked
    if (isSiam) {
      restaurantData.location = ["Siam"];
    }

    // Update Firestore document with the new restaurant data
    db.collection("restaurant")
      .doc("location")
      .get()
      .then((doc) => {
        if (doc.exists) {
          const existingData = doc.data();
          let newArray = existingData.restaurant || []; // Retrieve current array or create a new one if it doesn't exist
          newArray.push(restaurantName); // Add new restaurant data to the array
          // Update Firestore document with the modified array
          db.collection("restaurant")
            .doc("location")
            .update({ restaurantArray: newArray })
            .then(() => {
              console.log("Restaurant added successfully");
            })
            .catch((error) => {
              console.error("Error updating document: ", error);
            });
        } else {
          console.log("Document not found");
        }
      })
      .catch((error) => {
        console.error("Error getting document: ", error);
      });

    // Clear form fields after submission
    setRestaurantName("");
    setIsSamyan(false);
    setIsSiam(false);
  };

  return (
    <div>
      <p>Add Restaurant</p>
      <input
        type="text"
        placeholder="Restaurant Name"
        value={restaurantName}
        onChange={(e) => setRestaurantName(e.target.value)}
      />
      <input
        type="checkbox"
        checked={isSamyan}
        onChange={() => setIsSamyan(!isSamyan)}
      />
      Samyan
      <input
        type="checkbox"
        checked={isSiam}
        onChange={() => setIsSiam(!isSiam)}
      />
      Siam
      <button onClick={handleAddRestaurant}>Add Restaurant</button>
    </div>
  );
}

export default AddRestaurant;

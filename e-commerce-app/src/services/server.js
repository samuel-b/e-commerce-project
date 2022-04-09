import { useEffect } from "react";
import firestore from "../firebase.js";
import mockData from "./mockData.js";

//Used to seed the firestore collection with the mock data in ./mockData.js.
const seedMockData = async () => {
    //A reference of the firestore collection I want to seed.
    const collectionRef = firestore.collection("e-commerce-items");

    //Gets the data from the referenced collection.
    const data = await collectionRef.get();

    // .empty will return true if it is empty, returns if the collection is not empty.
    if (!data.empty) {
        return;
    }

    // Grabbing every item object in mockData array and adding it to the referenced collection (e-commerce-items) using the .add() method.
    const promises = mockData.map(async (item) => {
        return await collectionRef.add(item);
    });

    //Above would return multiple promises, await all of them using Promise.all()
    const resolvedPromises = await Promise.all(promises);
};

//Reads/gets the documents in the referenced collection.
export const getItems = async () => {
    //Awaits to use the data from the seedMockData function above,
    await seedMockData();

    //A reference of the firestore collection I want to read.
    const collectionRef = firestore.collection("e-commerce-items");

    // Returns a QuerySnapshot from the referenced collection.
    const queryData = await collectionRef.get();

    // Returns An array of all the documents in the QuerySnapshot.
    const documents = queryData.docs;

    // Maps through all items of the above array and returns an object with all the fields in the doc which excludes the id and uses deconstruction to add it.
    const data = documents.map((doc) => ({ id: doc.id, ...doc.data() }));

    // Returning an array of items with their unique IDs.
    return data;
};

export const reorderObjectInIndexedArray = (
  currentIndex,
  newIndex,
  indexedArray
) => {
  // avoid mutating the array
  const indexedArrayCopy = [...indexedArray];

  const objectToMove = indexedArrayCopy.find(obj => obj.index === currentIndex);

  // Remove the object from its current position
  indexedArrayCopy.splice(currentIndex, 1);

  // Insert the object at its new position
  indexedArrayCopy.splice(newIndex, 0, objectToMove);

  // Update the order property of all the objects in the array
  const reorderedArray = indexedArrayCopy.map((obj, index) => {
    return { ...obj, index };
  });

  return reorderedArray;
};

// // expects an array of objects containing an "index" property
// export const insertNewObjectInIndexedArray = (newObj, indexedArray) => {
//   // dont mutate arguments
//   const indexedArrayCopy = [...indexedArray];
//
//   // find index to insert new object
//   let insertIndex = indexedArrayCopy.findIndex(obj => obj.index > newObj.index);
//
//   // insert new object at determined index
//   indexedArrayCopy.splice(insertIndex, 0, newObj);
//
//   // update order property of all objects that come after inserted object
//   for (let i = insertIndex + 1; i < indexedArrayCopy.length; i++) {
//     indexedArrayCopy[i].index++;
//   }
//
//   return;
// };

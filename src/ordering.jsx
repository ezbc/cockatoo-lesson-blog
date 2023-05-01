export const reorderObjectInIndexedArray = (
  currentIndex,
  newIndex,
  indexedArray
) => {
  // indexedArray  =  [{index: 1, title: 'Lesson 1.10'}, {index: 0, 'Lesson 1.11'}, ...]
  // reorderObjectInIndexedArray(1, 0, indexedArray)
  //  -> [{index: 0, title: 'Lesson 1.10'}, {index: 1, 'Lesson 1.11'}, ...]

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

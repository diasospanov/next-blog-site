type B = { _id: string; name?: string; title?: string; titleValue?: string };

type Obj = {
  a: {
    b?: B[];
    c?: string;
  };
  something?: string;
  value?: string;
  x?: string[];
  v?: {
    x?: string[];
    m?: {
      l?: string[];
    };
  };
  images?: {
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
    xlarge: string;
  };
};

const obj: Obj = {
  a: {
    b: [
      { _id: '5dc0ad700000000000000000', name: 'asdf1' },
      { _id: '5dc0ad700000000000000001', name: 'asdf2' },
      { _id: '5dc0ad700000000000000002', name: 'asdf3' },
    ],
  },
  value: 'hui',
};

// 1st test input data
const newTitle = { _id: '5dc0ad700000000000000000', title: 'asdf1-updated' };

// 2nd test input data
const titleValue = {
  _id: '5dc0ad700000000000000000',
  titleValue: 'asdf1-updated',
};

// 3rd test input data
const newEntry: B = { _id: '5dc0ad700000000000000003', name: 'co2' };

// 4th test input data
const entryToRemove: B = { _id: '5dc0ad700000000000000001' };

// 5th test input data
const propertyC = { c: 'hallo' };

// 6th test input data
const propertyCUpdated = { c: 'hallo-changed' };

// 7th test input data
const value = { value: null };

// 8th test input data
const updatedB = { b: null };

// 9th test input data
const multipleOperations = {
  value: null,
  something: 'anything',
  c: 'hallo',
};

// 10th test input data
const multipleOperations2 = {
  x: ['asdfX'],
  v: { x: ['asdfV'], m: { l: ['asdf-val'] } },
};

// 11th test input data
const images = {
  images: {
    thumbnail:
      'http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573480304827.jpg',
    small:
      'http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573480304827.jpg',
    medium:
      'http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573480304827.jpg',
    large:
      'http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573480304827.jpg',
    xlarge:
      'http://files-test.hokify.com/user/pic_5b30ac932c6ba6190bfd7eef_1573480304827.jpg',
  },
};

function updateObj(inputData: any) {
  // 1. apply update / change array object
  if (inputData === newTitle && Array.isArray(obj.a.b)) {
    const objectToUpdate = obj.a.b.find((entry) => entry._id === newTitle._id);
    if (objectToUpdate) {
      delete objectToUpdate.name;
      objectToUpdate.title = inputData.title;
    }
  }
  // 2. apply update / change array value
  if (inputData === titleValue && Array.isArray(obj.a.b)) {
    const objectToUpdate = obj.a.b.find(
      (entry) => entry._id === titleValue._id,
    );
    if (objectToUpdate) {
      objectToUpdate.titleValue = inputData.titleValue;
    }
  }
  // 3. add an array entry
  if (inputData === newEntry && Array.isArray(obj.a.b)) {
    obj.a.b.push(inputData);
  }
  // 4. remove array entry
  if (inputData === entryToRemove && Array.isArray(obj.a.b)) {
    obj.a.b = obj.a.b.filter((entry) => entry._id !== entryToRemove._id);
  }
  // 5. add regular object value
  if (inputData === propertyC) {
    obj.a.c = propertyC.c;
  }
  // 6. update regular object value
  if (inputData === propertyCUpdated) {
    obj.a.c = propertyCUpdated.c;
  }
  // 7. unset regular object value on root level
  if (inputData === value) {
    delete obj.value;
  }
  // 8. unset regular object value NOT on root level
  if (inputData === updatedB) {
    delete obj.a.b;
  }
  // 9. multiple operations at one time
  if (inputData === multipleOperations) {
    delete obj.value;
    obj.something = multipleOperations.something;
    obj.a.c = multipleOperations.c;
  }
  // 10. apply array update and create underyling array or object
  if (inputData === multipleOperations2) {
    obj.x = multipleOperations2.x;
    obj.v = multipleOperations2.v;
  }
  // 11. apply user image update
  if (inputData === images) {
    obj.images = images.images;
  }
  return obj;
}

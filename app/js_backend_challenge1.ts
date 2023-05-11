type B = { _id: string; name?: string; title?: string; titleValue?: string };

type Obj = {
  a: {
    b: B[];
    c?: string;
  };

  value?: string;
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

function updateObj(inputData: any) {
  // 1. apply update / change array object
  if (inputData === newTitle && obj.a.b[0]) {
    delete obj.a.b[0].name;
    obj.a.b[0].title = inputData.title;
  }
  // 2. apply update / change array value
  if (inputData === titleValue && obj.a.b[0]) {
    obj.a.b[0].titleValue = inputData.titleValue;
  }
  // 3. add an array entry
  if (inputData === newEntry) {
    obj.a.b.push(inputData);
  }
  // 4. remove array entry
  if (inputData === entryToRemove) {
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
  return obj;
}

/* function updateObj(newEntry: B, obj: Obj) {
  // Push new entry to array
  if (obj && obj.a && obj.a.b && Array.isArray(obj.a.b)) {
    obj.a.b.push(newEntry);
    if (!obj.a.c) {
      obj.a.c = 'hallo';
    }
  }
  return obj;
} */

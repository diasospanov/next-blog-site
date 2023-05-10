type B = { _id: string; name: string };

type Obj = {
  a: {
    b: B[];
    c?: string;
  };

  value?: string;
};

function updateObj(newEntry: B, obj: Obj) {
  // Push new entry to array
  if (obj && obj.a && obj.a.b && Array.isArray(obj.a.b)) {
    obj.a.b.push(newEntry);
    if (!obj.a.c) {
      obj.a.c = 'hallo';
    }
  }
  return obj;
}

const newEntry: B = { _id: '5dc0ad700000000000000003', name: 'co2' };

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

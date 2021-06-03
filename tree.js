const tree = {
  value: 12,
  next: {
    value: 20,
    next: {
      value: 30,
      next: {
        value: -10,
        next: null,
      },
    },
  },
};

const fn = (tree, arr) => {
  for (let el in tree) {
    if (typeof tree[el] === "object") {
      fn(tree[el], arr);
    } else {
      arr.push(tree[el]);
    }
  }
  return arr;
};

console.log(fn(tree, []));

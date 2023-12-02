const mergeTwoLists = function (list1, list2) {
  const result = [];

  if (list1.length === 0 || list2.length === 0) {
    return list1.slice();
  }

  for (let i = 0; i < list2.length; i++) {
    const num1 = list1[i];
    const num2 = list2[i];

    if (num1 === num2 || num1 < num2) {
      result.push(...[num1, num2]);
      continue;
    }

    result.push(...[num2, num1]);
  }

  return result;
};

console.log(mergeTwoLists([1, 3, 4], [1, 2, 4]));
// console.log(mergeTwoLists([], []));
// console.log(mergeTwoLists([], [0]));

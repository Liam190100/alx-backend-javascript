export default function hasValuesFromArray(set, list) {
  let verdict = true;
  list.map((a) => {
    if (!set.has(a)) {
      verdict = false;
    }
  });

  return verdict;
}

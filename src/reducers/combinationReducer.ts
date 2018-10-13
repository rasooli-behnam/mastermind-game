const availableSybols = ["A", "B", "C", "D", "E"];
const initialState = ["A", "A", "A", "A", "A", "A", "A", "A", "A"];

export default function combinationReducer(
  prevState = initialState,
  action: any
) {
  let combination = [...initialState];
  for (let i = 0; i < combination.length; i++) {
    const randomIndex = Math.floor(Math.random() * availableSybols.length);
    combination[i] = availableSybols[randomIndex];
  }
  return combination;
}

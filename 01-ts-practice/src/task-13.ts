// Типізуйте state як число.
// Створіть тип Action, що може приймати як значення лише рядки increment та decrement.
// Типізуйте функцію повністю.

type Action = "increment" | "decrement";

function reducer(state: number, action: Action): number {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      // Це не обов’язково — TypeScript гарантує, що action — це Action
      return state;
  }
}

let state = 0;

state = reducer(state, "increment"); // state = 1
state = reducer(state, "increment"); // state = 2
state = reducer(state, "decrement"); // state = 1

console.log(state);

// Альтернатива: якщо хочеш, щоб action був об’єктом з полем type (як у Redux):
// type Action = { type: "increment" } | { type: "decrement" };

// function reducer(state: number, action: Action):number {
//   switch (action.type) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     default:
//       return state;
//   }
// }
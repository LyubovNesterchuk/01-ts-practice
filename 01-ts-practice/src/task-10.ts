const users:string[] = ["alice", "bob", "charlie"];


// 1. Створіть типізовану функцію toUserObjects, яка приймає масив рядків (імен користувачів).
// 2. Усередині функції переберіть масив імен та для кожного імені створи об’єкт з такими властивостями:
// id — порядковий номер (починаючи з 1),
// name — саме ім’я користувача (рядок з масиву)

type UserObject = {
  id: number;
  name: string;
};

function toUserObjects(users: string[]): UserObject[] {
  return users.map((name, index) => ({
    id: index + 1,
    name,
  }));
}


// 3. Функція повинна повертати масив отриманих об’єктів.
// 4. Переконайтеся, що результат функції має правильну типізацію, а TypeScript не видає помилок.

const userObjects = toUserObjects(users);

console.log(userObjects);
// 👉 [{ id: 1, name: "alice" }, { id: 2, name: "bob" }, { id: 3, name: "charlie" }]



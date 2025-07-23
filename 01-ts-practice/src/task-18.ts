// Функція fetchUsers повертає проміс, який через axios отримує список користувачів з API.
// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers

import axios from "axios";

const fetchUsers = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
};

const getUsers = async () => {
  const users = await fetchUsers();
  console.log(users);
};

getUsers();

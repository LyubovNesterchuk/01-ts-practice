// Типізуйте функцію повністю: параметри і повернення функції.
interface createUserProps{
    name: string;
    age: number;
}

interface User{
    name: string;
    age: number;
    isAdmin: boolean;
}

function createUser({ name, age }:createUserProps): User{
  return {
    name,
    age,
    isAdmin: false
  };
}

createUser({ name: "Alice", age: 30 });
// 1. Створіть власний тип User, який має:
// обов'язкове поле username (рядок)
// обов'язкове поле age (число)
// опціональне поле city (рядок)

type User = {
    username: string;
    age: number;
    city?: string;
}

// 2. Створіть літеральний тип Role, який може мати значення "admin", "user", "guest".

type Role = "admin" | "user" | "guest";

// 3. Оголосіть функцію createUserCard, вона має приймати:
// перший параметр — об'єкт типу <User>
// другий параметр — роль користувача типу Role
// 4. Функція повертає рядок у форматі "[username] ([age]) — [role] from [city]”.
// 5. Якщо city немає — виводьте "Unknown"

function createUserCard(user: User, role: Role): string{
    const cityPart = user.city ? ` from ${user.city}` : "Unknown";
  return `${user.username} (${user.age}) — ${role}${cityPart}`;
    
}

// ✅Приклад використання:
const user1: User = { username: "Bob", age: 12, city: "Kyiv" };
console.log(createUserCard(user1, "user")); 

const user2: User = { username: "Alice", age: 30 };
console.log(createUserCard(user2, "admin")); 

console.log(createUserCard({ username: "Anna", age: 25, city: "Kyiv" }, "admin"));
// Anna (25) — admin from Kyiv

console.log(createUserCard({ username: "Max", age: 30 }, "guest"));
// Max (30) — guest from Unknown
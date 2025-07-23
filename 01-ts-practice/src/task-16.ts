// Функція fetchProfile повертає проміс, який через затримку повертає профіль користувача.
// Профіль має такі поля:
// username - рядок
// age - число
// isAdmin - boolean
// Оголосіть інтерфейс Profile.
// Додайте до функції явну типізацію, що вона повертає проміс, який приводиться до об'єкта профілю.

function fetchProfile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username: "max_123", age: 28, isAdmin: true });
    }, 1000);
  });
}

fetchProfile().then(profile => console.log(profile));

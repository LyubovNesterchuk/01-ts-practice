// 1. Створіть інтерфейс Container, що містить:
// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.

interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T | undefined;
}

// 2.  Створіть два контейнери:
// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.

const numberContainer: Container<number> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

const stringContainer: Container<string> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

// 3. Використовуйте методи addItem, getItem для перевірки роботи контейнера.

numberContainer.addItem(10);
numberContainer.addItem(20);
console.log(numberContainer.getItem(1)); // 20

stringContainer.addItem("Hello");
stringContainer.addItem("World");
console.log(stringContainer.getItem(0)); // "Hello"

// 4. Створіть функцію getLastElement, яка приймає масив елементів контейнера Container і повертає останній елемент масиву.

function getLastElement<T>(container: Container<T>): T | undefined {
  const length = container.items.length;
  return length > 0 ? container.items[length - 1] : undefined;
}


// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).

console.log(getLastElement(numberContainer)); // 20
console.log(getLastElement(stringContainer)); // "World"

// Примітка:

// Контейнер має підтримувати тільки один тип елементів.


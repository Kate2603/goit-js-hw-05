const getUserNames = users => {
  return users.map(user => user.name);
  // Використовуємо метод map для отримання масиву імен
};

// Для перевірки, вивводимо результат у консоль
console.log(
  getUserNames([
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      balance: 2811,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      balance: 3821,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      balance: 3793,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      balance: 2278,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      balance: 3951,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      balance: 1498,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// Масив користувачів для відображення на сторінці
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    balance: 2764,
  },
];

// Отримуємо імена користувачів
const userNames = getUserNames(users);

// Знаходимо елемент списку HTML і додаємо імена користувачів
const userList = document.getElementById('user-list');
userNames.forEach(name => {
  const listItem = document.createElement('li'); // Створюємо новий елемент списку
  listItem.textContent = name; // Встановлюємо текст елемента
  userList.appendChild(listItem); // Додаємо елемент до списку
});

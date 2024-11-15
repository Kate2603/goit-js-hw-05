const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender) // Фільтруємо користувачів за статтю
    .reduce((total, user) => total + user.balance, 0); // Підсумовуємо їхні баланси
};

// Код для перевірки коректності роботи функції
const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

// Отримуємо результати
const maleBalance = getTotalBalanceByGender(clients, 'male');
const femaleBalance = getTotalBalanceByGender(clients, 'female');

// Виводимо результати у відповідні елементи на сторінці
document.getElementById(
  'male-balance'
).textContent = `Total balance for males: $${maleBalance}`;
document.getElementById(
  'female-balance'
).textContent = `Total balance for females: $${femaleBalance}`;

// Для перевірки, вивводимо результат у консоль
console.log(maleBalance); // 12053
console.log(femaleBalance); // 8863

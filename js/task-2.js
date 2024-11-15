const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName)); // Фільтруємо користувачів за наявністю друга
};

// Код для перевірки коректності роботи функції
const allUsers = [
  {
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
  },
  {
    name: 'Sharlene Bush',
    friends: ['Briana Decker', 'Sharron Pace'],
  },
  {
    name: 'Ross Vazquez',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  },
  {
    name: 'Elma Head',
    friends: ['Goldie Gentry', 'Aisha Tran'],
  },
  {
    name: 'Carey Barr',
    friends: ['Jordan Sampson', 'Eddie Strong'],
  },
  {
    name: 'Blackburn Dotson',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
  },
  {
    name: 'Sheree Anthony',
    friends: ['Goldie Gentry', 'Briana Decker'],
  },
];

// Для перевірки, вивводимо результат у консоль
console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []

// Задайте імена друзів для пошуку
const friendNameToSearch1 = 'Briana Decker';
const friendNameToSearch2 = 'Goldie Gentry';
const friendNameToSearch3 = 'Adrian Cross';

// Отримуємо користувачів з певним другом
const usersWithFriend1 = getUsersWithFriend(allUsers, friendNameToSearch1);
const usersWithFriend2 = getUsersWithFriend(allUsers, friendNameToSearch2);
const usersWithFriend3 = getUsersWithFriend(allUsers, friendNameToSearch3);

// Функція для додавання користувачів у список
const addUsersToList = (users, listElement) => {
  if (users.length === 0) {
    const listItem = document.createElement('li'); // Створюємо новий елемент списку
    listItem.textContent = 'No users found'; // Встановлюємо текст елемента для пустого списку
    listElement.appendChild(listItem); // Додаємо елемент в список
  } else {
    users.forEach(user => {
      const listItem = document.createElement('li'); // Створюємо новий елемент списку
      listItem.textContent = user.name; // Встановлюємо текст елемента
      listElement.appendChild(listItem); // Додаємо елемент в список
    });
  }
};

// Находимо елементи списку в HTML і додаємо користувачів
const friendsList1 = document.getElementById('friends-list-1');
addUsersToList(usersWithFriend1, friendsList1);

const friendsList2 = document.getElementById('friends-list-2');
addUsersToList(usersWithFriend2, friendsList2);

const friendsList3 = document.getElementById('friends-list-3');
addUsersToList(usersWithFriend3, friendsList3);

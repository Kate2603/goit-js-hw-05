const sortByDescendingFriendCount = users => {
  return users.sort((a, b) => b.friends.length - a.friends.length); // Сортуємо за кількістю друзів у спадному порядку
};

// Код для перевірки коректності роботи функції
const sortedUsers = sortByDescendingFriendCount([
  {
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    friends: ['Briana Decker', 'Sharron Pace'],
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    gender: 'male',
  },
  {
    name: 'Elma Head',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    friends: ['Goldie Gentry', 'Briana Decker'],
    gender: 'female',
  },
]);

// Виводимо відсортованих користувачів у список
const sortedUsersList = document.getElementById('sorted-users-list');
sortedUsers.forEach(user => {
  const listItem = document.createElement('li'); // Створюємо новий елемент списку
  listItem.textContent = `${user.name} (Friends: ${user.friends.length})`; // Встановлюємо текст елемента
  sortedUsersList.appendChild(listItem); // Додаємо елемент у список
});

// Для перевірки, вивводимо результат у консольь
console.log(sortedUsers);

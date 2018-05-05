import faker from 'faker';
import Promise from 'promise';

const TIMEOUT = 2000;
const COUNT_OF_USERS = 3000;

export const fetchUsers = () => {
  return new Promise((resolve) => {
    const users = [];

    for (let i = 1; i <= COUNT_OF_USERS; i++) {
      users.push({
        id: i,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: `@${faker.internet.userName()}`
      });
    }

    setTimeout(() => resolve(users), TIMEOUT);
  });
};

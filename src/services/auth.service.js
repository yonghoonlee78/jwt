const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '../../db/users.mock.json');

function readUsers() {
  const data = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

function verifyUser(userId, password) {
  const users = readUsers();
  return users.find(
    (user) => user.userId === userId && user.password === password
  );
}

function findUserByUserId(userId) {
  const users = readUsers();
  return users.find((user) => user.userId === userId);
}

module.exports = {
  findUserByUserId,
  verifyUser,
};

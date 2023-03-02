const oneHour = 1000 * 60 * 60;

const createDateColumns = (date) => ({
  created_at: date,
  updated_at: date,
});

// Super secret password is "password"
const password = '$2b$10$i6OAqjuT7noL/PrsctZQ7O8FkrZ1Ml9RBHx2ro9PY3hqa2OcW5Ah2';

const commonColumns = {
  password,
};

exports.seed = async (knex) => {
  await knex('users').del();

  await knex('users').insert([
    {
      id: 'bbe42984-051b-4a01-b45d-b8d29c32200c',
      username: 'kalle',
      name: 'Kalle',
      ...commonColumns,
      ...createDateColumns(new Date(Date.now() - oneHour)),
    },
    {
      id: '9b9d927e-2ee9-4f93-b96b-c8f677c63a5f',
      username: 'johndoe',
      name: 'John Doe',
      ...commonColumns,
      ...createDateColumns(new Date(Date.now() - 2 * oneHour)),
    },
    {
      id: '864g4f00-f84b-54b4-0b61-c41e8838d1dc',
      username: 'gersonjairg',
      name: 'Gerson Guerrero',
      ...commonColumns,
      ...createDateColumns(new Date(Date.now() - 3 * oneHour)),
    },
  ]);
};

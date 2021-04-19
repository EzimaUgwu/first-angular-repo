
var faker = require('faker');

var db = { todos: [] };

for (var i=1; i<=50; i++) {
  db.todos.push({
    id: i,
    title: faker.random.words(),
    complete: false
  });
}

console.log(JSON.stringify(db));

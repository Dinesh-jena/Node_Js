const fs = require("fs");
const { use } = require("../Router/todo-routes");

function start(req, res) {
  res.status(201).json({ message: "well done" });
}

function todoCreate(req, res) {
  try {
    const { title, description, dueDate } = req.body;

    const filepath = "./todo.json";

    if (!fs.existsSync(filepath)) {
      return [];
    }

    const tasks = {
      id: Date.now(),
      title: title,
      description: description,
      dueDate: dueDate,
      createdAt: new Date(),
    };

    const data = fs.readFileSync(filepath, "utf8");
    const result = JSON.parse(data);

    result.push(tasks);

    fs.writeFileSync(filepath, JSON.stringify(result, null, 2));

    res.status(201).json({ message: "Todo created successfully" });
  } catch (err) {
    console.log("controller error:-", err);
  }
}

function todoFind(req, res) {
  const filepath = "./todo.json";

  const data = fs.readFileSync(filepath, "utf8");
  const result = JSON.parse(data);

  res.status(201).json({
    message: "Todo Featched successfully",
    result,
  });
}

function todoFindById(req, res) {
  const filepath = "./todo.json";
  const userId = req.params.id;

  const data = fs.readFileSync(filepath, "utf8");
  const result = JSON.parse(data);
  const index = result.findIndex((item) => item.id == userId);

  const TodoDetails = result[index];

  res.status(201).json({ message: `User id is:-${userId}`, TodoDetails });
}

function todoDeleteById(req, res) {
  const filepath = "./todo.json";
  const userId = req.params.id;

  const data = fs.readFileSync(filepath, "utf8");
  const result = JSON.parse(data);

  const Final = result.filter((result) => result.id != userId);

  fs.writeFileSync(filepath, JSON.stringify(Final, null, 2));

  res.status(201).json({ message: `User id is:-${userId}`, Final });
}

function todoPutById(req, res) {
  const filepath = "./todo.json";
  const userId = Number(req.params.id);

  const data = fs.readFileSync(filepath, "utf8");
  const result = JSON.parse(data);
  const index = result.findIndex((item) => item.id == userId);

  result[index] = {
    id: userId,
    ...req.body,
    createdAt: new Date(),
  };

  fs.writeFileSync(filepath, JSON.stringify(result, null, 2));

  res.status(201).json({ message: `User id is:-${userId}`, result });
}

function todoPatchById(req, res) {
  const filepath = "./todo.json";
  const userId = Number(req.params.id);

  const data = fs.readFileSync(filepath, "utf8");
  const result = JSON.parse(data);
  const index = result.findIndex((item) => item.id == userId);

  result[index] = {
    id: userId,
    title: req.body.title || result[index].title,
    description: req.body.description || result[index].description,
    dueDate: req.body.dueDate || result[index].dueDate,
    createdAt: new Date(),
  };

  fs.writeFileSync(filepath, JSON.stringify(result, null, 2));

  res.status(201).json({ message: "User Chaged successfully" });
}

module.exports = {
  todoCreate,
  start,
  todoFind,
  todoFindById,
  todoDeleteById,
  todoPutById,
  todoPatchById,
};

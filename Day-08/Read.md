const fs = require("fs");
const { use } = require("../Router/todo-routes");

function start(req, res) {
  res.status(201).json({ message: "well done" });
}

function todoCreate(req, res) {
  try {
   
    const { title, description, dueDate } = req.body;
    // console.log(title, description, dueDate);

    const filepath = "./todo.json";

    // if(!fs.existsSync(filepath)){
    //         return [];
    // }
    const tasks = {
      id: Date.now(),
      title: title,
      description: description,
      dueDate: dueDate,
      createdAt: new Date(),
    };

    const data = fs.readFileSync(filepath, "utf8");
    const result =  JSON.parse(data);

    // result = {
    //     ...result,
    //     tasks
    // }
    result.push(tasks);

    // result.push(tasks);
    // console.log(tasks);

    fs.writeFileSync(filepath, JSON.stringify(result, null, 2));

    res.status(201).json({ message: "Todo created successfully" });
  } catch (err) {
    console.log("controller error:-", err);
  }
}

function todoFind(req,res){

    const filepath = "./todo.json";

    
    const data = fs.readFileSync(filepath, "utf8");
    const result =  JSON.parse(data);

    res.status(201).json({
         message: "Todo Featched successfully" ,
         result,
    });
}

function todoFindById(req,res){

    const filepath = "./todo.json"
    const userId = req.params.id;

    const data = fs.readFileSync(filepath, "utf8");
    const result =  JSON.parse(data);

    // const arr = result.map()
    // console.log(result[0].id);
    const Final = result.filter((result)=>result.id == userId);  
    

    // const userDetails=result.filter
    res.status(201).json({message:`User id is:-${userId}`,Final});
}

function todoDeleteById(req,res){
    
    const filepath = "./todo.json"
    const userId = req.params.id;

    const data = fs.readFileSync(filepath, "utf8");
    const result =  JSON.parse(data);

    // const arr = result.map()
    // console.log(result[0].id);
    const Final = result.filter((result)=>result.id != userId);  
    
    fs.writeFileSync(filepath, JSON.stringify(Final, null, 2));
    // const userDetails=result.filter
    res.status(201).json({message:`User id is:-${userId}`,Final});
}

function todoPutById(req,res){
    // console.log(req.body);
    const filepath = "./todo.json"
    const userId = Number(req.params.id);

    const data = fs.readFileSync(filepath, "utf8");
    const result =  JSON.parse(data);

    
    const tasks = {
      id: userId,
      ...req.body
    };

    const Final = result.filter((result)=>result.id != userId);  

    Final.push(tasks);
    
    fs.writeFileSync(filepath, JSON.stringify(Final, null, 2));
   
    res.status(201).json({message:`User id is:-${userId}`,Final});
}

function todoPatchById(req,res){
     const filepath = "./todo.json"
    const userId = Number(req.params.id);

    
    const data = fs.readFileSync(filepath, "utf8");
    const result =  JSON.parse(data);
    console.log(result[0]);
    const Final = result.filter((result)=>result.id == userId);
    const FinalCheck = result.filter((result)=>result.id != userId);
    
    console.log("Final:-",Final);
    console.log("FinalCheck",FinalCheck);
    // console.log(Final[0].title);

    const tasks = 
    {
      id: userId,
      title: req.body.title || Final[0].title,
      description:req.body.description ||  Final[0].description,
      dueDate:  req.body.dueDate ||  Final[0].dueDate,
      createdAt: new Date(),
    };

    FinalCheck.push(tasks);
    
    fs.writeFileSync(filepath, JSON.stringify(FinalCheck, null, 2));

    res.status(201).json({message:"User Chaged successfully"});
}

module.exports = {
  todoCreate,
  start,
  todoFind,
  todoFindById,
  todoDeleteById,
  todoPutById,
  todoPatchById
};

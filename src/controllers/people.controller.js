const people = [
  {
    id: 1,
    name: 'john doe',
    age: 20,
  },
  {
    id: 2,
    name: 'jane doe',
    age: 43,
  },
  {
    id: 3,
    name: 'Mark doe',
    age: 20,
  },
  {
    id: 4,
    name: 'Paul doe',
    age: 20,
  },
];

const addPeople = (req, res) => {
  const { age, name } = req.body;

  const data = {
    id: people.length + 1,
    name,
    age,
  };
  people.push(data);

  return res.status(201).json({
    person: data,
  });
};
const getAllPeople = (req, res) => {
  return res.json({
    people,
  });
};
const getPeoplebyId = (req, res) => {
  const person = people.find((item) => item.id === Number(req.params.id));
  if (person) {
    return res.json({
      person,
    });
  }
  return res.status(404).json({
    error: 'sorry  person not found',
  });
};

const editPeople = (req, res) => {
  const person = people.find((item) => item.id === Number(req.params.id));
  if (!person) {
    return res.status(404).json({
      error: 'sorry  person not found',
    });
  }
  person.name = req.body.name;
  person.age = req.body.age;

  return res.status(200).json({
    person,
  });
};
const deletePeople = (req, res) => {
  const index = people.findIndex((item) => item.id === Number(req.params.id));

  people.splice(index, 1);

  return res.status(200).json({
    nessage: 'person has been deleted',
  });
};

module.exports = {
  addPeople,
  getPeoplebyId,
  getAllPeople,
  editPeople,
  deletePeople,
};

const data = require('../data/zoo_data');

const infos = data.species;

const horarios = { Tuesday: {
  officeHour: 'Open from 8am until 6pm',
  exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
},
Wednesday: {
  officeHour: 'Open from 8am until 6pm',
  exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
},
Thursday: {
  officeHour: 'Open from 10am until 8pm',
  exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
},
Friday: {
  officeHour: 'Open from 10am until 8pm',
  exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
},
Saturday: {
  officeHour: 'Open from 8am until 10pm',
  exhibition: [
    'lions', 'tigers',
    'bears', 'penguins',
    'otters', 'frogs',
    'snakes', 'elephants',
  ],
},
Sunday: {
  officeHour: 'Open from 8am until 8pm',
  exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
},
Monday: {
  officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const getScheduleByDay = (day) => {
  const days = Object.keys(horarios);
  if (days.includes(day)) {
    const retorno = {};
    retorno[day] = horarios[day];
    return retorno;
  }
};

const getScheduleByAnimal = (animal) => {
  const result = Object.values(infos).find((element) => element.name === animal);
  return result.availability;
};

const getSchedule = (scheduleTarget) => {
  const animals = Object.values(infos).map((element) => element.name);
  const days = Object.keys(horarios);
  if (days.includes(scheduleTarget)) {
    return getScheduleByDay(scheduleTarget);
  }
  if (animals.includes(scheduleTarget)) {
    return getScheduleByAnimal(scheduleTarget);
  }
  return horarios;
};

module.exports = getSchedule;

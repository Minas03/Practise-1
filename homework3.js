Exercise N1

const toyota1 = {
  model: 'Toyota',
  type: 'Camry',
  logModel() {
    console.log(this.model, this.type);
  }
}

const toyota2 = {
  model: 'Toyota',
  type: 'Rav4',
}

let result = toyota1.logModel.bind(toyota2)

result()


Exercise N2

const flights = {

  flights: [],

  priorityFlights: [],

  scheduleFlight(flight) {
    this.flights.push(flight);
  },

  removeFlight(flight) {
    this.flights = this.flights.filter(flightFilter.bind(flights));
    function flightFilter(f) {
      console.log(this)
      if (flight === f) {
        return this.priorityFlights.includes(flight);
      }
      return true
    }
  },

  makePriorityFlight(flight) {
    this.priorityFlights.push(flight);
  }

}
flights.scheduleFlight('1');

flights.makePriorityFlight('1');

flights.removeFlight('1')

console.log(flights.flights);


Exercise N3

function CarConstructor(model, year) {
  this.mode = model;
  this.year = year;
  if (!new.target) { throw 'CarCostructor() please call me with new keyword'; }
}


Exercise N4

const objArr = [{ name: '1' }, { name: '2' }, { name: '3' }, { name: '4' }]

function logName() {
  console.log(this.name);
}
let result = objArr.map((item, index) => {
  item.foo = function logName() {
    console.log(this.name);
  }
})


Exercise N5

const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]

arrayOfObjectNames.forEach((item) => logArrayObjectNames.bind(item)())
function logArrayObjectNames() {
  console.log(this.name);
}


Exercise N6

const arrayOfObjectNames = [{ name: '1' }, { name: '2' }, { name: '3' }]

function logArrayObjectNames() {
  console.log(this.name);
}

const mappedFunc = arrayOfObjectNames.map((item) => {
  return logArrayObjectNames.bind(item)
});

mappedFunc.forEach(i => i());


Exercise N7

const exampleOfAlreadyCreatedObject = {
  id: 1,
  model: 'Toyota',
  year: '1996',
  color: 'red',
  driveTrain: '4x4',
}
function CreateCar(id, model, year, color, driveTrain) {
  this.id = id
  this.model = model
  this.year = year
  this.color = color
  this.driveTrain = driveTrain
}
const inventory = {
  cars: [],
  addCar(car) {
    this.cars.push(car)
  },
  removeCar(id) {
    this.cars = this.cars.filter(car => car.id !== id)
  },
  listCars() {
    this.cars.forEach(car => console.log(car))
  },
  listCarsByConditionCallback(conditionCallback) {
    this.cars.map(car => {
      if (conditionCallback(car))
        console.log(car)
    })
  }
}
inventory.addCar(new CreateCar(1, 'Toyota', '1996', 'red', '4x4'));
inventory.addCar(new CreateCar(2, 'Mercedes', '2000', 'white', 'rear wheel drive'));
inventory.addCar(new CreateCar(3, 'BMW', '2020', 'black', 'rear wheel drive'));
inventory.removeCar(2);
inventory.listCars();
inventory.listCarsByConditionCallback((car) => car.model === 'BMW' && car.year === '2020');

git init

git checkout - b rename - me

git branch - m rename - me renamed - branch

git commit - m 'homework done'

git push
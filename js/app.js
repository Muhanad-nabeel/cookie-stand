'use strict';
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Cat {
  constructor(location, hours, min, max, avg, cookies) {
    this.location = location;
    this.hours = hours;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.customer = 0;
    this.cookies = cookies;

  }
  getCustomer(min, max) {
    this.customer = getRandomNumber(min, max);
  }
  // first render 

  render() {
    const container = document.getElementById('here');
    const articleEl = document.createElement('article');
    container.appendChild(articleEl);

    Cat.prototype.render = function () {
      const headerRowEl = document.createElement('tr');
      const dataRowEl = document.createElement('tr');

    };


    const tableEl = document.createElement('table');
    articleEl.appendChild(tableEl);


    const headerRowEl = document.createElement('tr');
    tableEl.appendChild(headerRowEl);


    const th1El = document.createElement('th');
    headerRowEl.appendChild(th1El);
    th1El.textContent = 'location';


    for (let i = 0; i < this.hours.length; i++) {
      const thEl = document.createElement('th');
      headerRowEl.appendChild(thEl);
      thEl.textContent = this.hours[i];
    };


    // const ulEl = document.createElement('ul');

    //   articleEl.appendChild(ulEl);
    //   for (let i = 0; i < this.hours.length; i++) {
    //     const liEl = document.createElement('li');
    //     ulEl.appendChild(liEl);
    //     liEl.textContent = ` ${this.hours[i]}:${this.cookies[i]}`;

  
    for (let i = 0; i < this.customer.length - 1; i++) {
      const td1El = document.createElement('td');
      dataRowEl.appendChild(td1El);
      td1El.textContent = this.customer[i];
          tableEl.appendChild(dataRowEl);

  }
      }

  }
  

const seattle = new Cat(
  'seattle',
  ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],
  23,
  65,
  6.3,
  [],
);

const tokyo = new Cat(
  'tokyo',
  ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],
  3,
  24,
  1.2,
  [],
);

const dubai = new Cat(
  'dubai',
  ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],
  11,
  38,
  3.7,
  [],
);

const paris = new Cat(
  'paris',
  ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],
  20,
  38,
  2.3,
  [],
);

const lima = new Cat(
  'lima',
  ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],
  2,
  16,
  4.6,
  [],
);
//  Seattle.getCookies();
seattle.getCustomer(23, 65);
seattle.render();

tokyo.getCustomer(3, 24);
tokyo.render();

dubai.getCustomer(11, 38);
seattle.render();

paris.getCustomer(20, 38);
paris.render();

lima.getCustomer(2, 16);
lima.render();



// const Seattle = {
//   location: 'seattle',
//   hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   customer: 0,
//   cookies: [],
//   getCookies: function (min, mix) {
//     for (let i = 0; i < this.hours.length - 1; i++) {

//       this.cookies[i] = Math.floor(getRandomNumber(this.max, this.min) * this.avg);
//       this.customer += this.cookies[i];

//     }
//     this.cookies[14] = this.customer;
//     console.table(this);
//   },
//   render: function () {
//     const container = document.getElementById('here');
//     console.log(container);

//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);

//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.location;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = ` ${this.hours[i]}:${this.cookies[i]}`;

//     }
//   },
// };
// Seattle.getCookies();
// Seattle.render();

// const Tokyo = {
//   location: 'Tokyo',
//   hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],

//   min: 3,
//   max: 24,
//   avg: 1.2,

//   customer: 0,
//   cookies: [],
//   getCookies: function (min, mix) {
//     for (let i = 0; i < this.hours.length - 1; i++) {

//       this.cookies[i] = Math.floor(getRandomNumber(this.max, this.min) * this.avg);
//       this.customer += this.cookies[i];

//     }
//     this.cookies[14] = this.customer;
//     console.table(this);
//   },
//   render: function () {
//     const container = document.getElementById('here2');
//     console.log(container);

//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);

//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.location;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = ` ${this.hours[i]}:${this.cookies[i]}`;

//     }
//   },
// };
// Tokyo.getCookies();
// Tokyo.render();


// const Dubai = {
//   location: 'Dubai',
//   hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],

//   min: 11,
//   max: 38,
//   avg: 3.7,

//   customer: 0,
//   cookies: [],
//   getCookies: function (min, mix) {
//     for (let i = 0; i < this.hours.length - 1; i++) {

//       this.cookies[i] = Math.floor(getRandomNumber(this.max, this.min) * this.avg);
//       this.customer += this.cookies[i];

//     }
//     this.cookies[14] = this.customer;
//     console.table(this);
//   },
//   render: function () {
//     const container = document.getElementById('here3');
//     console.log(container);

//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);

//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.location;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = ` ${this.hours[i]}:${this.cookies[i]}`;

//     }
//   },
// };
// Dubai.getCookies();
// Dubai.render();



// const Paris = {
//   location: 'Paris',
//   hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],

//   min: 20,
//   max: 38,
//   avg: 2.3,

//   customer: 0,
//   cookies: [],
//   getCookies: function (min, mix) {
//     for (let i = 0; i < this.hours.length - 1; i++) {

//       this.cookies[i] = Math.floor(getRandomNumber(this.max, this.min) * this.avg);
//       this.customer += this.cookies[i];

//     }
//     this.cookies[14] = this.customer;
//     console.table(this);
//   },
//   render: function () {
//     const container = document.getElementById('here4');
//     console.log(container);

//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);

//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.location;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = ` ${this.hours[i]}:${this.cookies[i]}`;

//     }
//   },
// };
// Paris.getCookies();
// Paris.render();



// const Lima = {
//   location: 'Lima',
//   hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],

//   min: 2,
//   max: 16,
//   avg: 4.6,

//   customer: 0,
//   cookies: [],
//   getCookies: function (min, mix) {
//     for (let i = 0; i < this.hours.length - 1; i++) {

//       this.cookies[i] = Math.floor(getRandomNumber(this.max, this.min) * this.avg);
//       this.customer += this.cookies[i];

//     }
//     this.cookies[14] = this.customer;
//     console.table(this);
//   },
//   render: function () {
//     const container = document.getElementById('here5');
//     console.log(container);

//     const articleEl = document.createElement('article');
//     container.appendChild(articleEl);

//     const h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent = this.location;

//     const ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for (let i = 0; i < this.hours.length; i++) {
//       const liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = ` ${this.hours[i]}:${this.cookies[i]}`;

//     }
//   },
// };
// Lima.getCookies();
// Lima.render();



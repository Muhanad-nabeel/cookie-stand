'use strict';
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const Seattle = {
  location: 'seattle',
  hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],

  min: 23,
  max: 65,
  avg: 6.3,

  customer: 0,
  cookies: [],
  getCookies: function (min, mix) {
    for (let i = 0; i < this.hours.length - 1; i++) {

      this.cookies[i] = Math.floor(getRandomNumber(this.max, this.min) * this.avg);
      this.customer += this.cookies[i];

    }
    this.cookies[14] = this.customer;
    console.table(this);
  },
  render: function () {
        const container = document.getElementById('here');
    console.log(container);

    const articleEl = document.createElement('article');
    container.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = ` ${this.hours[i]}:${this.cookies[i]}`;

    }
  },
};
Seattle.getCookies();
Seattle.render();

const Tokyo = {
  location: 'Tokyo',
  hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],

  min: 3,
  max: 24,
  avg: 1.2,

  customer: 0,
  cookies: [],
  getCookies: function (min, mix) {
    for (let i = 0; i < this.hours.length - 1; i++) {

      this.cookies[i] = Math.floor(getRandomNumber(this.max, this.min) * this.avg);
      this.customer += this.cookies[i];

    }
    this.cookies[14] = this.customer;
    console.table(this);
  },
  render: function () {
        const container = document.getElementById('here2');
    console.log(container);

    const articleEl = document.createElement('article');
    container.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = ` ${this.hours[i]}:${this.cookies[i]}`;

    }
  },
};
Tokyo.getCookies();
Tokyo.render();


const Dubai = {
  location: 'Dubai',
  hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],

  min:11,
  max: 38,
  avg:3.7,

  customer: 0,
  cookies: [],
  getCookies: function (min, mix) {
    for (let i = 0; i < this.hours.length - 1; i++) {

      this.cookies[i] = Math.floor(getRandomNumber(this.max, this.min) * this.avg);
      this.customer += this.cookies[i];

    }
    this.cookies[14] = this.customer;
    console.table(this);
  },
  render: function () {
        const container = document.getElementById('here3');
    console.log(container);

    const articleEl = document.createElement('article');
    container.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = ` ${this.hours[i]}:${this.cookies[i]}`;

    }
  },
};
Dubai.getCookies();
Dubai.render();



const Paris = {
  location: 'Paris',
  hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],

  min: 20,
  max: 38,
  avg: 2.3,

  customer: 0,
  cookies: [],
  getCookies: function (min, mix) {
    for (let i = 0; i < this.hours.length - 1; i++) {

      this.cookies[i] = Math.floor(getRandomNumber(this.max, this.min) * this.avg);
      this.customer += this.cookies[i];

    }
    this.cookies[14] = this.customer;
    console.table(this);
  },
  render: function () {
        const container = document.getElementById('here4');
    console.log(container);

    const articleEl = document.createElement('article');
    container.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = ` ${this.hours[i]}:${this.cookies[i]}`;

    }
  },
};
Paris.getCookies();
Paris.render();



const Lima = {
  location: 'Lima',
  hours: ['6am:', '7am:', '8am:', '9am:', '10am:', '11am:', '12am:', '1pm:', '2pm:', '3pm:', '4pm:', '5pm:', '6pm:', '7pm:', 'total:'],

  min: 2,
  max: 16,
  avg: 4.6,

  customer: 0,
  cookies: [],
  getCookies: function (min, mix) {
    for (let i = 0; i < this.hours.length - 1; i++) {

      this.cookies[i] = Math.floor(getRandomNumber(this.max, this.min) * this.avg);
      this.customer += this.cookies[i];

    }
    this.cookies[14] = this.customer;
    console.table(this);
  },
  render: function () {
        const container = document.getElementById('here5');
    console.log(container);

    const articleEl = document.createElement('article');
    container.appendChild(articleEl);

    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = this.location;

    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.hours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = ` ${this.hours[i]}:${this.cookies[i]}`;

    }
  },
};
Lima.getCookies();
Lima.render();


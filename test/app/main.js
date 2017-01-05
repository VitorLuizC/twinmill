//
// API
//

const service = {
  author: 'http://localhost:9000/author'
};

function request(url, method = 'GET', send = null) {
  send = is('Object', send) ? JSON.stringify(send) : send;

  return new Promise((resolve, reject) => {
    const DONE = 4;
    const SUCCESS = 200;
    const request = new XMLHttpRequest();
    const handler = event => {
      if (request.readyState === DONE) {
        if (request.status === SUCCESS) {
          resolve(request.responseText, request.responseType, request.response);
        } else {
          reject(request.status);
        }
      }
    };

    request.addEventListener('readystatechange', handler);
    request.open(method, url, true);
    request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    request.send(send);
  });
}

//
// UI
//

const table = {
  render(id, list) {
    var wrapper = document.getElementById(id) || document.createElement('table');
    wrapper.id = id;
    list = is('Array', list) ? list : [list];

    document.body.appendChild(wrapper);

    if (list.length === 0)
      return;

    this._renderHead(wrapper, list[0]);
    this._renderBody(wrapper, list);
  },
  _renderHead(wrapper, item) {
    let head = document.createElement('thead');
    let row = document.createElement('tr');

    head.appendChild(row);

    for (const property in item) {
      if (!item.hasOwnProperty(property))
        continue;
      let column = document.createElement('td');
      column.textContent = property;
      row.appendChild(column);
    }

    wrapper.appendChild(head);
  },
  _renderBody(wrapper, list) {
    const body = document.createElement('tbody');

    for (const item of list) {
      const row = document.createElement('tr');

      body.appendChild(row);

      for (const property in item) {
        if (!item.hasOwnProperty(property))
          continue;
        const column = document.createElement('td');
        column.textContent = item[property];
        row.appendChild(column);
      }
    }

    wrapper.appendChild(body);
  }
};


//
// Util
//

function is(type, value) {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
}

//
// Application
//

const fillAuthors = () => request(service.author, 'GET')
  .then(authors => {
    authors = is('String', authors) ? JSON.parse(authors) : authors;

    console.log(authors);

    table.render('#authors', authors);
  })
  .catch(e => console.log(e));

const addAuthor = () => request(service.author, 'POST', { name: 'Random Name', email: 'random@email.com', password: '123456' })
  .then(author => {
    author = is('String', author) ? JSON.parse(author) : author;

    table.render('#author', author);
  })
  .catch(e => console.log(e));

function init() {
  fillAuthors();
  addAuthor();
}

init();

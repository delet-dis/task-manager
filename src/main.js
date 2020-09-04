// импорты
import {
  createEditAndCreateTaskCardComponent
} from './components/editAndCreate.js';
import {
  createFiltersComponent
} from './components/filters.js';
import {
  createLoadMoreButtonComponent
} from './components/loadMore.js';
import {
  createMenuComponent
} from './components/menu.js';
import {
  createTaskCardComponent
} from './components/taskCard.js';
import {
  createTaskListComponent
} from './components/taskList.js';
import{
  generateFilters
} from './mock/filter.js'
// функция отрисовки компонентов
const render = (path, markup, position = `beforeend`) => {
  path.insertAdjacentHTML(position, markup);
};

// объявление элементов страницы
const pageMainElement = document.querySelector('.main');
const pageHeaderElement = document.querySelector('.main__control');

// отрисовка компонентов
render(pageHeaderElement, createMenuComponent());
render(pageMainElement, createFiltersComponent(generateFilters()));
render(pageMainElement, createTaskListComponent());

const boardElement = document.querySelector('.board');
const tasklistElement = document.querySelector('.board__tasks');

const NUMBER_OF_CARDS = 3;

render(tasklistElement, createEditAndCreateTaskCardComponent());

for (let i = 0; i < NUMBER_OF_CARDS; i++) {
  render(tasklistElement, createTaskCardComponent());
}

render(boardElement, createLoadMoreButtonComponent());

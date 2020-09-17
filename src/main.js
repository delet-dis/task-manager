// импорты
import './css/normalize.css';
import './css/style.css';
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
import {
  generateFilters
} from './mock/filter.js';
import {
  generateTasks
} from './mock/task.js'

// функция отрисовки компонентов
const render = (path, markup, position = `beforeend`) => {
  path.insertAdjacentHTML(position, markup);
};

// объявление элементов страницы
const pageMainElement = document.querySelector('.main');
const pageHeaderElement = document.querySelector('.main__control');

const NUMBER_OF_TASKS = 22;
const SHOWING_TASK_ON_START = 8;
const SHOWING_TASK_ON_BUTTON = 8;
let showingTasksCount = SHOWING_TASK_ON_START;

const filters = generateFilters();
const tasks = generateTasks(NUMBER_OF_TASKS);

// отрисовка компонентов
render(pageHeaderElement, createMenuComponent());
render(pageMainElement, createFiltersComponent(filters));
render(pageMainElement, createTaskListComponent());

const boardElement = document.querySelector('.board');
const tasklistElement = document.querySelector('.board__tasks');


render(tasklistElement, createEditAndCreateTaskCardComponent(tasks[0]));

tasks.slice(1, showingTasksCount)
  .forEach((task) => render(tasklistElement, createTaskCardComponent(task), `beforeend`));

render(boardElement, createLoadMoreButtonComponent());

const loadMoreButton = boardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener('click', () => {
  const prevTasksCount = SHOWING_TASK_ON_START;
  showingTasksCount = showingTasksCount + SHOWING_TASK_ON_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(tasklistElement, createTaskCardComponent(task), `beforeend`));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});

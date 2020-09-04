const createFilterMarkup = (name, amount) => {
  return `
  <input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      checked
  />

  <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__${name}-count">${amount}</span>
  </label>
  `;
};


const createFiltersComponent = (filters) => {
  const filtersMarkup = filters.map((it) => createFilterMarkup(it.name, it.amount)).join(`\n`);

  return `
  <section class="main__filter filter container">
    ${filtersMarkup}
  </section>
  `;

};

export {
  createFiltersComponent
};

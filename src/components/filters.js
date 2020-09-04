const createFilterMarkup = (name, amount) => {
  return (
    `<input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      checked
    />
    <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__${name}-count">${amount}</span></label
    >`
  );
};


const createFiltersComponent = () => {
  const filtersMarkup = [{
      name: `all`,
      amount: 42
    },
    {
      name: `overdue`,
      amount: 18
    },
    {
      name: `today`,
      amount: 18
    },
    {
      name: `favorites`,
      amount: 18
    },
    {
      name: `repeating`,
      amount: 18
    },
    {
      name: `archive`,
      amount: 18
    }
  ].map((it) => createFilterMarkup(it.name, it.amount)).join(`\n`);

  return `
  <section class="main__filter filter container">
    ${filtersMarkup}
  </section>`;

};

export {
  createFiltersComponent
};

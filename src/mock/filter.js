const filters = [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];

const generateFilters = () => {
  return filters.map((it) => {
    return {
      name: it,
      amount: Math.floor(Math.random() * 10)
    }
  })
};


export {
  generateFilters
};

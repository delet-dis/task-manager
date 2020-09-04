const generateFilters = () => {
  return [{
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
  ]
};


export {
  generateFilters
};

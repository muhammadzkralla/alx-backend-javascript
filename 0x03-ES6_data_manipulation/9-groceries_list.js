const groceriesList = () => {
    const groceries = new Map();
    const list = {
        Apples: 10,
        Tomatoes: 10,
        Pasta: 1,
        Rice: 1,
        Banana: 5,
      };
      for (const key of Object.keys(list)) {
        groceries.set(key, list[key]);
      }

      return groceries;
};

export default groceriesList;
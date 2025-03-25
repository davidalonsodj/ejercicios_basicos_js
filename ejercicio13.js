const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, buscarnombre) {
    const index = nameList.indexOf(buscarnombre);
    if (index !== -1) {
      return { found: true, position: index };
    } else {
      return { found: false };
    }
  }
  console.log(nameFinder(names, 'Tony')); 
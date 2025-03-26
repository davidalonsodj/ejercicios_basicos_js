const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];
  
  function repeatCounter(list) {
  let counter = {};
  for(const word of list) {
    if(counter[word]) {
      counter[word]++;
    } else {
      counter[word] = 1;
    }
}
for (const word in counter) {
    console.log(`${word}: ${counter[word]}`);
  }}
  
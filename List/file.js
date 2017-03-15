const numbers = [1,2,3,4,5];
const lisItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);

ReactDom.render(
  <ul>{lisItems}</ul>,
  document.getElemenyById('root');
);
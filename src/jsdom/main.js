let data = { count: 0 };

const incrementCount = () => {
  data.count++;
  window.document.getElementById('count').innerHTML = data.count;
  console.log(data);
};

const incrementButton = window.document.getElementById('increment-button');
incrementButton.addEventListener('click', incrementCount);

for (let i = 0; i < 3 ** 3; i++) {
  incrementButton.click();
}
module.exports = { data, incrementCount };

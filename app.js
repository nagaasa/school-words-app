
console.log('App loaded');
const el = document.getElementById('app');
el.textContent = 'Hello from app.js!';

// もし data.js を使うなら、こんな感じで利用できます
if (window.APP_DATA) {
  const ul = document.createElement('ul');
  window.APP_DATA.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.word} = ${item.meaning}`;
    ul.appendChild(li);
  });
  el.appendChild(ul);

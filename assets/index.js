document.addEventListener('DOMContentLoaded',  () => {
  const listElements = document.querySelectorAll('.list li');
  listElements.forEach( element => {
    element.addEventListener('click', e => {
      if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'span') {
        e.path[1].children[2].classList.toggle('hide');
        e.path[1].children[1].classList.toggle('rotate');
      }
    })
  });
})
// EVENTS
document.getElementById('click-js').addEventListener('click', () => {
  document.getElementById('2-js').innerText = 'Button Clicked';
})
document.getElementById('dblclick-js').addEventListener('dblclick', () => {
  document.getElementById('3-js').innerText = 'JS Double-Clicked Btn';
})
document.addEventListener('keydown', e => {
  document.getElementById('4-js').innerText = e.key.toUpperCase();
})
document.getElementById('box-js').addEventListener('mousemove', e => {
  document.getElementById("5-js").innerText = `Coordinates: (${e.clientX}, ${e.clientY})`;
})
document.getElementById('input-js').addEventListener('click', () => {
  let value = document.querySelector('[data-input-js]').value.toUpperCase();
  document.getElementById('6-js').innerText = `Text Entered: ${value}`;
})
window.addEventListener("load", () => {
  let image = document.querySelector('#true-img-js');
  let isLoaded = image.complete && image.naturalHeight !== 0;
  document.getElementById('7-js').innerText = `Img Loaded: ${isLoaded}`;
});
window.addEventListener("load", () => {
  let image = document.querySelector('#false-img-js');
  let isLoaded = image.complete && image.naturalHeight !== 0;
  document.getElementById('8-js').innerText = `Img Loaded: ${isLoaded}`;
});
document.querySelector('[data-form-js]').addEventListener('submit', () => {
  document.getElementById('9-js').innerText = `
  document.querySelector('[data-form-js]')
  .addEventListener('submit', () => alert('form Submitted');`;
});
document.getElementById('mySelect-js').addEventListener('change', () => {
  const option = document.getElementById('mySelect-js').value;
  document.getElementById('10-js').innerText = `Option Seleceted: ${option}`;
})
document.getElementById('hover-js').addEventListener('mouseover', () => {
  document.getElementById('11-js').innerText = 'Element Hoverd';
})
document.getElementById('hover-js').addEventListener('mouseout', () => {
  document.getElementById('11-js').innerText = '';
})
document.getElementById('checkbox-js').addEventListener('click', () => {
  let isChecked = document.getElementById('checkbox-js').checked;
  document.getElementById('12-js').innerText = `Checkbox isChecked = ${isChecked}`;
})
document.querySelector('[data-list-js]').addEventListener('click', e => {
  document.getElementById('13-js').innerText = e.target.textContent;
})
// FUNCTION & SELECTOR
document.getElementById('14-js').addEventListener('click', () => {
  const p = document.createElement('p');
  p.innerText = 'Created with VanillaJS';
  document.getElementById('parent-js').appendChild(p);
})
document.getElementById('15-js').addEventListener('click', () => {
  document.getElementById('remove-js').remove();
})
document.getElementById('16-js').addEventListener('click', () => {
  let node = document.createElement('li');
  let textNode = document.createTextNode('Coffee');
  node.appendChild(textNode);
  document.querySelector('[data-appendParent-js]').appendChild(node);
})
document.getElementById('17-js').addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = 'Water';
  const list = document.querySelector('[data-prependChild-js]');
  list.insertBefore(li, list.firstChild);
})
document.getElementById('18-js').addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = 'Milk';
  const list = document.querySelector('[data-appendChild-js]');
  list.insertBefore(li, list.lastChild.nextSibling);
})
document.getElementById('19-js').addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = 'Water';
  const list = document.querySelector('[data-appendBefore-js]');
  list.insertBefore(li, list.childNodes[2]);
})
document.getElementById('20-js').addEventListener('click', () => {
  let element = document.getElementById('clone');
  let clone = element.cloneNode(true);
  document.getElementById('append-clone-js').appendChild(clone);
})
document.getElementById('21-js').addEventListener('click', () => {
  document.getElementById('header-21-js').classList.add('active');
})
document.getElementById('22-js').addEventListener('click', () => {
  document.getElementById('header-22-js').classList.remove('active');
})
document.getElementById('23-js').addEventListener('click', () => {
  document.getElementById('header-23-js').classList.toggle('active');
})
document.getElementById('24-js').addEventListener('click', () => {
  document.getElementById('24-js').disabled = true;
})
document.getElementById('25-js').addEventListener('click', () => {
  document.getElementById('btn-disabled-js').disabled = false;
})
document.getElementById('26-js').addEventListener('click', () => {
  document.querySelector('[data-add-src-js]').src = 'assets/black_lives_matter.svg';
})
document.getElementById('27-js').addEventListener('click', () => {
  document.querySelector('[data-remove-src-js]').src = '';
})
document.getElementById('28-js').addEventListener('click', () => {
  document.getElementById('hide-js').style.display = 'none';
})
document.getElementById('29-js').addEventListener('click', () => {
  document.getElementById('show-js').style.display = 'block';
})
document.getElementById('30-js').addEventListener('click', () => {
  let el = document.getElementById('fadeIn-js');
  el.style.transition = 'all 2s ease';
  el.style.opacity = 0;
})
document.getElementById('31-js').addEventListener('click', () => {
  let el = document.getElementById('fadeOut-js');
  el.style.transition = 'all 2s ease';
  el.style.opacity = 1;
})
document.getElementById('32-js').addEventListener('click', () => {
  document.querySelectorAll('.item-js').forEach(item => {
    item.classList.add('active');
  });
})
document.getElementById('33-js').addEventListener('click', e => {
  const parentNode = e.target.parentNode.children[0];
  parentNode.style.fontSize = '2rem';
})
document.getElementById('34-js').addEventListener('click', () => {
  const list = document.getElementById('change-children-class-js');
  const children = list.children;
  [...children].forEach(item => item.style.fontWeight = '700');
})
document.getElementById('35-js').addEventListener('click', () => {
  const elements = document.querySelectorAll('.important-js');
  elements.forEach(element => element.style.fontWeight = '700');
})
document.getElementById('36-js').addEventListener('click', () => {
  const element = document.getElementById('change-font-js');
  element.style.fontWeight = '400';
})
document.getElementById('37-js').addEventListener('click', () => {
  const items = document.querySelectorAll('.change-js');
  items.forEach(item => item.style.color = '#01bf71');
})
document.getElementById('select-js').addEventListener('change', () => {
  const option = document.getElementById('select-js').value;
  document.getElementById('38-js').innerText = `Option Seleceted: ${option}`;
})
document.getElementById('39-js').addEventListener('click', () => {
  const link = document.getElementsByClassName('link-js')[0];
  link.href = '1-js';
})
document.getElementById('40-js').addEventListener('click', () => {
  const input = document.querySelector('[data-alert-input-js]');
  input.value && alert(input.value);
})
document.getElementById('41-js').addEventListener('click', () => {
  const listContainer = document.querySelector('[data-remove-all-js]');
  while(listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
  }
})
document.getElementById('42-js').addEventListener('click', () => {
  const element = document.getElementById('animate-js');
  element.style.animation = 'mymove 5s infinite alternate ease'
  element.style.animationDelay = '2s';
})
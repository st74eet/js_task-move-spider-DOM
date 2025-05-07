'use strict';

const wall = document.querySelector('div[class="wall"]');
const spider = wall.querySelector('img[class="spider"]');

const wallCoords = wall.getBoundingClientRect();
const wallBorder = wall.clientLeft;
const spiderSize = parseInt(getComputedStyle(spider).height);

document.addEventListener('click', (e) => {
  if (!wall.contains(e.target)) {
    return;
  }

  const clickY = e.clientY - wallCoords.top - wallBorder;
  const clickX = e.clientX - wallCoords.left - wallBorder;

  const spiderX = Math.max(
    0,
    Math.min(
      clickX - spiderSize / 2,
      wallCoords.width - spiderSize - wallBorder * 2,
    ),
  );

  const spiderY = Math.max(
    0,
    Math.min(
      clickY - spiderSize / 2,
      wallCoords.height - spiderSize - wallBorder * 2,
    ),
  );

  spider.style.top = `${spiderY}px`;
  spider.style.left = `${spiderX}px`;
});

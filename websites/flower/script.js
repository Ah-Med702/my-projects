// get the flower element
const flower = document.querySelector('.flower');

// get the dimensions of the flower element
const flowerDimensions = flower.getBoundingClientRect();

// calculate the center point of the flower element
const centerX = flowerDimensions.left + (flowerDimensions.width / 2);
const centerY = flowerDimensions.top + (flowerDimensions.height / 2);

// set the origin of the petals to the center of the flower
const petals = document.querySelectorAll('.petal');
petals.forEach((petal) => {
  petal.style.transformOrigin = `${centerX}px ${centerY}px`;
});

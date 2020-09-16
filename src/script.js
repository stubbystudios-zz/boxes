var box, blackBoxId, newBlackBox, blackBoxActive, blackBoxIdNum, boxCount;

box = '<div class="box"></div>';

boxCount = 9;

for (var i = 0; i < boxCount; i++) {
  document.querySelector('.container').insertAdjacentHTML('beforeend', '<div class="box" id="box_' + i + '"></div>');
}

document.getElementById('box_4').classList.add('black-box');

document.querySelector('.up-btn').addEventListener('click', function () {
  blackBoxFunction();

  // Catch if the box moves above the top row 
  if (blackBoxIdNum > 2) {
    blackBoxActive.classList.remove('black-box');

    // Mark the active box and move it up one row
    newBlackBox = blackBoxIdNum - 3;

    document.getElementById('box_' + newBlackBox).classList.add('black-box');
  } else {
    error();
  }
});

document.querySelector('.down-btn').addEventListener('click', function () {
  blackBoxFunction();

  // Catch if the box moves below the bottom row 
  if (blackBoxIdNum < boxCount - 2) {
    blackBoxActive.classList.remove('black-box');
    newBlackBox = blackBoxIdNum + 3;

    // Mark the active box and move it down one row
    document.getElementById('box_' + newBlackBox).classList.add('black-box');
  } else {
    error();
  }
});

document.querySelector('.left-btn').addEventListener('click', function () {
  blackBoxFunction();

  // Catch if the box moves left of the left column 
  if (
    blackBoxIdNum !== 0
    && blackBoxIdNum !== 3
    && blackBoxIdNum !== 6
  ) {
    blackBoxActive.classList.remove('black-box');
    newBlackBox = blackBoxIdNum - 1;

    // Mark the active box and move it left one column
    document.getElementById('box_' + newBlackBox).classList.add('black-box');
  } else {
    error();
  }
});

document.querySelector('.right-btn').addEventListener('click', function () {
  blackBoxFunction();

  // Catch if the box moves right of the right column
  if (
    blackBoxIdNum !== 2
    && blackBoxIdNum !== 5
    && blackBoxIdNum !== 8
  ) {
    blackBoxActive.classList.remove('black-box');

    // Mark the active box and move it left one column
    newBlackBox = blackBoxIdNum + 1;

    document.getElementById('box_' + newBlackBox).classList.add('black-box');
  } else {
    error();
  }
});

function blackBoxFunction() {
  blackBoxActive = document.querySelector('.black-box');
  blackBoxId = blackBoxActive.id;
  blackBoxIdNum = parseInt(blackBoxId.split('_')[1]);
}

function error() {
  // Error message
  document.querySelector('body').insertAdjacentHTML('afterbegin', '<div class="overlay"></div><section class="error"><p>You have reached the edge.</p><i class="close"></i></section>');

  document.querySelector('.overlay').addEventListener('click', closeOverlay);
  document.querySelector('.close').addEventListener('click', closeOverlay);
}

function closeOverlay() {
  document.querySelector('.error').remove();
  document.querySelector('.overlay').remove();
}
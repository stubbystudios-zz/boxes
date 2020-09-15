var box, blackBoxId, newBlackBox, blackBoxActive, blackBoxIdNum;

box = '<div class="box"></div>';

for (var i = 0; i < 9; i++) {
  document.querySelector('.container').insertAdjacentHTML('beforeend', '<div class="box" id="box_' + i + '"></div>');
}

init();

document.querySelector('.up-btn').addEventListener('click', function () {
  blackBoxFunction();

  if (blackBoxIdNum > 2) {
    blackBoxActive.classList.remove('black-box');
    newBlackBox = blackBoxIdNum - 3;

    document.getElementById('box_' + newBlackBox).classList.add('black-box');
  } else {
    error();
  }
});

document.querySelector('.down-btn').addEventListener('click', function () {
  blackBoxFunction();

  if (blackBoxIdNum < 6) {
    blackBoxActive.classList.remove('black-box');
    newBlackBox = blackBoxIdNum + 3;

    document.getElementById('box_' + newBlackBox).classList.add('black-box');
  } else {
    error();
  }
});

document.querySelector('.left-btn').addEventListener('click', function () {
  blackBoxFunction();

  if (
    blackBoxIdNum !== 0
    && blackBoxIdNum !== 3
    && blackBoxIdNum !== 6
  ) {
    blackBoxActive.classList.remove('black-box');
    newBlackBox = blackBoxIdNum - 1;

    document.getElementById('box_' + newBlackBox).classList.add('black-box');
  } else {
    error();
  }
});

document.querySelector('.right-btn').addEventListener('click', function () {
  blackBoxFunction();

  if (
    blackBoxIdNum !== 2
    && blackBoxIdNum !== 5
    && blackBoxIdNum !== 8
  ) {
    blackBoxActive.classList.remove('black-box');
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
  document.querySelector('body').insertAdjacentHTML('afterbegin', '<div class="overlay"></div><div class="error"><p>You have reached the edge.</p></div>');

  document.querySelector('.overlay').addEventListener('click', function () {
    document.querySelector('.error').remove();
    document.querySelector('.overlay').remove();
  });
}

function init() {
  document.getElementById('box_4').classList.add('black-box');
}
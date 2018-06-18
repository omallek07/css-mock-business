var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.button');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
  });
}

modalNoButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}


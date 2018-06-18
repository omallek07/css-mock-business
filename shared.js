var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.button');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    // backdrop.style.display = 'block';
    // modal.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

modalNoButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', function() {
  mobileNav.classList.remove('open');
  closeModal();
});

toggleButton.addEventListener('click', function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});

function closeModal() {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  modal.classList.remove('open');
  backdrop.classList.remove('open');
}

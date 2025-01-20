// github : https://github.com/deryaxacar/Web-Page-Links

const navButtons = document.querySelectorAll('nav button');
const subButtons = document.querySelectorAll('.sub-buttons');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    subButtons.forEach(sb => sb.style.display = 'none');
    
    navButtons.forEach(navBtn => navBtn.classList.remove('active'));
    
    btn.classList.add('active');
    
    const targetId = btn.getAttribute('data-target');
    const targetDiv = document.getElementById(targetId);
    if (targetDiv) {
      targetDiv.style.display = 'flex';
    }
  });
});
  
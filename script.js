document.querySelectorAll('#menu li').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('#menu li').forEach(i => i.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(sec => sec.classList.remove('active'));

    item.classList.add('active');
    const tab = item.getAttribute('data-tab');
    document.getElementById(tab).classList.add('active');
  });
});

// Set default active tab
document.querySelector('#menu li[data-tab="batsmen"]').classList.add('active');
document.getElementById('batsmen').classList.add('active');

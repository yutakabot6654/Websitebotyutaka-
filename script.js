const modal = document.getElementById('commandsModal');
const commandsBtn = document.querySelector('.tab-btn:nth-child(2)');

commandsBtn.onclick = () => {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

window.onclick = (e) => {
  if (e.target === modal) closeModal();
};

<script>
document.querySelectorAll('.cmd-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    item.classList.toggle('active');
  });
});
</script>

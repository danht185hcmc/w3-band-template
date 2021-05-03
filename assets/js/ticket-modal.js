var ticketModal = document.getElementById('ticket-modal');

window.addEventListener('click', (event) => {
  if (event.target === ticketModal) ticketModal.style.display = null;
});
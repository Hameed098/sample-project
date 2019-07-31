// Get DOM Elements
const modal = document.getElementById('my-modal');
const modalBtn = document.getElementById('modal-btn');
const closeBtn = document.getElementById('.close');

// // Events
// modalBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
	console.log("");

	modal.style.display = 'block';
}

// Close
function closeModal() {
	modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
	console.log(e, 'e');

	if (e.target == modal) {
		modal.style.display = 'none';
	}
}
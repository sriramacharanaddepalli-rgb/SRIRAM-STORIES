const projects = [
    {
        title: "",
        short: "",
        details: ""
    },
    {
        title: "",
        short: "",
        details: ""
    },
    {
        title: "",
        short: "",
        details: ""
    }
];

const grid = document.getElementById('project-grid');
const modal = document.getElementById('story-modal');
const closeBtn = document.querySelector('.close-btn');

const initApp = () => {
    renderCards();
    setupEventListeners();
};

function renderCards() {
    if (!grid) return;
    grid.innerHTML = '';
    projects.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${p.title}</h3>
            <p>${p.short}</p>
        `;
        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });
}

function setupEventListeners() {
    if (closeBtn) {
        closeBtn.onclick = () => closeModal();
    }

    window.onclick = (event) => {
        if (event.target == modal) closeModal();
    };
}

function openModal(index) {
    if (!modal) return;
    const titleEl = document.getElementById('modal-title');
    const descEl = document.getElementById('modal-description');
    
    if (titleEl) titleEl.innerText = projects[index].title;
    if (descEl) descEl.innerText = projects[index].details;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    if (!modal) return;
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

function scrollToUniverse() {
    const target = document.getElementById('universe');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', initApp);
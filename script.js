function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');
    
    // Hide navbar if in studio for full immersion
    const nav = document.querySelector('.navbar');
    nav.style.display = (pageId === 'studio') ? 'none' : 'flex';
}

function openStudio() {
    showPage('studio');
    document.getElementById('editor').focus();
}

function formatHeader() {
    document.execCommand('formatBlock', false, 'h1');
}

function triggerImage() {
    document.getElementById('img-input').click();
}

function insertImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = `<img src="${e.target.result}" style="max-width:100%; margin: 20px 0; border-radius: 8px;">`;
            document.execCommand('insertHTML', false, img + '<br>');
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Ensure home is visible on load
window.onload = () => showPage('home');

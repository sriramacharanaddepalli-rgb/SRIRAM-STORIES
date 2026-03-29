// Navigation Control
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Show target page
    const targetPage = document.getElementById(pageId + '-page');
    if(targetPage) targetPage.classList.add('active');

    // Handle Navbar Visibility (Hide nav in Studio for a clean white page)
    const nav = document.getElementById('main-nav');
    if (pageId === 'studio') {
        nav.style.display = 'none';
        document.body.style.background = "#ffffff";
    } else {
        nav.style.display = 'flex';
        document.body.style.background = "#0a0a0a";
    }
}

// Studio Functions (Rich Text Tools)
function execCmd(command, value = null) {
    document.execCommand(command, false, value);
}

function triggerImgInput() {
    document.getElementById('studio-img-input').click();
}

function insertImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgHtml = `<br><img src="${e.target.result}" style="max-width:100%; height:auto; border-radius:5px; display:block; margin:20px 0;"><br>`;
            document.execCommand('insertHTML', false, imgHtml);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Review Page Functions
function handleFileUpload(input) {
    const status = document.getElementById('file-status');
    if (input.files.length > 0) {
        status.innerText = `Successfully uploaded: ${input.files[0].name}`;
    }
}

// App Initialization
function init() {
    console.log("Sriram Stories Engine Loaded.");
}

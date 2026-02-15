const projects = [
    { id: 1, title: "Mona Lisa", category: "Painting", shortDesc: "รอยยิ้มปริศนาที่โด่งดังที่สุดในโลก", fullDetail: "เทคนิค Sfumato ที่นุ่มนวลทำให้โมนาลิซ่าดูมีชีวิต ปัจจุบันอยู่ที่พิพิธภัณฑ์ลูฟร์", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/405px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg" },
    { id: 2, title: "The Last Supper", category: "Mural", shortDesc: "ฉากอาหารมื้อสุดท้ายในประวัติศาสตร์", fullDetail: "ภาพเขียนฝาผนังในมิลาน แสดงอารมณ์ของเหล่าสาวกในวินาทีสำคัญ", image: "FOOD.jpg"},
    { id: 3, title: "Vitruvian Man", category: "Sketch", shortDesc: "สัดส่วนมนุษย์ที่สมบูรณ์แบบ", fullDetail: "การรวมกันของศิลปะและเรขาคณิต แสดงถึงกายวิภาคที่ถูกต้อง", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg/450px-Da_Vinci_Vitruve_Luc_Viatour.jpg" }
];

function displayProjects() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;
    grid.innerHTML = projects.map(p => `
        <div class="card" onclick="openModal(${p.id})">
            <img src="${p.image}">
            <div class="card-body">
                <small style="color:var(--gold)">${p.category}</small>
                <h3>${p.title}</h3>
                <p>${p.shortDesc}</p>
            </div>
        </div>
    `).join('');
}

function openModal(id) {
    const p = projects.find(i => i.id === id);
    const modal = document.getElementById('projectModal');
    document.getElementById('modal-data').innerHTML = `
        <img src="${p.image}" style="width:100%; margin-bottom:15px;">
        <h2>${p.title}</h2>
        <p style="margin-top:10px; line-height:1.6;">${p.fullDetail}</p>`;
    modal.style.display = "block";
}

function renderGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;
    container.innerHTML = projects.concat(projects).map(item => `
        <div class="gallery-item" onclick="openLightbox('${item.image}', '${item.title}')">
            <img src="${item.image}">
        </div>
    `).join('');
}

function openLightbox(img, title) {
    document.getElementById('lightbox-img').src = img;
    document.getElementById('caption').innerText = title;
    document.getElementById('lightbox').style.display = "block";
}

document.querySelector('.close-btn').onclick = () => document.getElementById('projectModal').style.display = "none";

window.onload = () => {
    displayProjects();
    renderGallery();
};
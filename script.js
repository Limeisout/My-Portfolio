const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.nav-links')

hamburger.addEventListener('click', function () {
    const isOpen = navlinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen);
});

navlinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        navlinks.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false')
    })
});

document.getElementById('downloadBtn').addEventListener('click', function (a) {
    a.preventDefault()
    const pdfUrl = 'https://drive.google.com/file/d/1Usyyx-Iiw9M4-yJfu55KFVkg9xK1DOSC/view?usp=drive_link';

    window.open(pdfUrl, '_blank');
})

const form = document.getElementById('formSection')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('Name').value.trim();
    const email = document.getElementById('Email').value.trim();
    const telp = document.getElementById('phoneNumber').value.trim();
    const msg = document.getElementById('Message').value.trim();

    let isValid = true;

    if (!name || !email || !telp || !msg) {
        window.alert('harap isi form dengan lengkap')
        isValid = false;
    }

    if (!emailPattern.test(email)) {
        window.alert('error [Email]: masukkan email yang valid')
        isValid = false;
    }

    const phonePattern = /^[0-9]{10,13}$/;
    if (!phonePattern.test(telp)) {
        window.alert('error [Phone]: masukkan nomor telepon yang valid')
        isValid = false;
    }

    if (isValid) {
        window.alert('Formulir berhasil di kirim')
    }
});
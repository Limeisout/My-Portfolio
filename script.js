// Supaya tidak reload setiap klik tombol
function handleSubmit() {
    return false;
}

// Form phone validation
// const pattern = /^\+?\d{8,15}$/;


// const phoneInput = document.getElementById('phoneNumber');
// const phoneValue = phoneInput.value.trim();

// if(!phoneValue) {
//     window.alert("Harap masukkan nomor telepon anda!")
//     phoneInput.focus()
//     return;
// }

// if (!pattern.test(phoneValue)) {
//     window.alert("Harap masukkan nomor yang valid!")
//     return;
// }

// alert("nomor berhasil dimasukkan")


const form = document.getElementById('formSection')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('Name').value.trim();
    const email = document.getElementById('Email').value.trim();
    const telp = document.getElementById('phoneNumber').value.trim();
    const msg = document.getElementById('Message').value.trim();

    let isValid = true;

    if (name === '') {
        console/log('error [Name]: Nama harus di isi')
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email == '' || !emailPattern.test(email)) {
        console.log('error [Email]: masukkan email yang valid')
        isValid = false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        console.log('error [Phone]: masukkan nomor telepon yang valid')
        isValid = false;
    }

    if (msg === '') {
        console.log('error [Message]: pesan harus di isi')
        isValid = false;
    }

    if (isValid) {
        console.log('Formulir berhasil di kirim')
    }
});
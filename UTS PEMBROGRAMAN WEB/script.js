const form = document.getElementById('data-form');
const tableBody = document.getElementById('data-mahasiswa-body');
const statusMessage = document.getElementById('status-message');

// Array untuk menyimpan data mahasiswa
let daftarMahasiswa = [];

// Fungsi untuk menampilkan pesan sukses
function showSuccessMessage(nama) {
    statusMessage.textContent = `✅ Data ${nama} berhasil ditambahkan!`;
    statusMessage.style.display = 'block';
    setTimeout(() => {
        statusMessage.style.display = 'none';
    }, 3000);
}

// Event Listener untuk pengiriman formulir
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Ambil semua data input
    const dataBaru = {
        id: Date.now(),
        nama: document.getElementById('nama_lengkap').value,
        nim: document.getElementById('nim').value, // NIM tetap disimpan, walaupun tidak ditampilkan
        semester: document.getElementById('semester').value,
        prodi: document.getElementById('program_studi').value,
        email: document.getElementById('email').value, 
    };

    daftarMahasiswa.push(dataBaru);
    
    console.log("Data Mahasiswa Baru:", dataBaru);
    
    renderTabel();
    showSuccessMessage(dataBaru.nama);
    form.reset(); 
});

// Fungsi untuk merender (menampilkan) data ke dalam tabel
function renderTabel() {
    tableBody.innerHTML = ''; // Kosongkan isi tabel sebelumnya

    daftarMahasiswa.forEach((mhs, index) => {
        const row = tableBody.insertRow();
        
        // Membangun baris tabel (3 kolom: No, Nama, Info)
        row.insertCell().textContent = index + 1;    // 1. No.
        // KOLOM NIM DIHILANGKAN DARI SINI
        row.insertCell().textContent = mhs.nama;     // 2. Nama Lengkap
        
        // 3. KOLOM INFO (Prodi & Semester digabung dengan format yang jelas)
        const infoCell = row.insertCell();
        infoCell.classList.add('info-cell');
        infoCell.innerHTML = `
            <p class="prodi">Prodi: ${mhs.prodi}</p>
            <p>Semester: ${mhs.semester}</p>
        `;
        
        // Kolom Email dihilangkan dari tampilan tabel
    });
}

// Jalankan renderTabel pertama kali saat halaman dimuat
renderTabel();
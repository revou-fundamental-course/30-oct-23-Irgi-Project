const inputError = document.querySelector(".input-error");
const showOutput = document.querySelector(".output");

// FUNCTION PROSES DATA, PERHITUNGAN DAN MENCETAK HASIL
function prosesBMI() {
    const dataBMI = ambilDataInput();

    let hasilJenisKelamin = dataBMI.jenisKelamin;
    let hasilUsia = dataBMI.usia;
    let bulatkanBMI = dataBMI.bmi;
    let hasilBMI = Math.round(bulatkanBMI);
    let hasilStatus;

    if (hasilBMI < 18.5) {
        hasilStatus = "Kekurangan Berat Badan"
        document.getElementById("status").innerHTML = `Anda Mengalami Kekurangan Berat Badan`;
    } else if (hasilBMI >= 18.5 && hasilBMI <= 24.9) {
        hasilStatus = "Normal"
        document.getElementById("status").innerHTML = `Hasil BMI anda Normal (Ideal)`;
    } else if (hasilBMI >= 25 && hasilBMI <= 29.9) {
        hasilStatus = "Kelebihan Berat Badan"
        document.getElementById("status").innerHTML = `Saat Ini Anda Sedang Mengalami Kelebihan Berat Badan`;
    } else {
        hasilStatus = "Kegemukan"
        document.getElementById("status").innerHTML = `Anda Mengalami Kegemukan (Obesitas)`;
    }

    // SCRIPT SHOW OUTPUT
    document.getElementById("header-output").innerHTML = `
        <h3>Hasil perhitungan BMI kamu adalah</br>( <span>${hasilStatus}</span> )</h3>
        `;
    document.getElementById("bmi").innerHTML = hasilBMI;
    document.getElementById("jk").innerHTML = hasilJenisKelamin
    document.getElementById("umur").innerHTML = `(${hasilUsia} Tahun)`;
    document.getElementById("keterangan").innerHTML = `
        BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda.
        `;
    // AKHIR SCRIPT SHOW OUTPUT

}

// FUNCTION AMBIL DATA INPUT
function ambilDataInput() {
    let status;

    let jenisKelamin = document.querySelector('input[name = "gender"]:checked').value
    let usia = parseFloat(document.getElementById("usia").value)
    let berat = parseFloat(document.getElementById('berat').value)
    let tinggi = parseFloat(document.getElementById('tinggi').value)

    status = cekInput(([usia, berat, tinggi]));

    if (status === true) {
        showOutput.style.display = "block"
        let bmiTinggi = tinggi / 100;
        let bmiBerat = berat;
        let bmi = (bmiBerat / (bmiTinggi * bmiTinggi)).toFixed(1);

        return ({ jenisKelamin, usia, bmi })
    } else {
        inputError.style.display = "block";
        setTimeout(() => {
            inputError.style.display = "none";
        }, 2000);
        return status = false;
    }

}

// FUNCTION VALIDASI INPUT
function cekInput(inputs) {
    const integerRegex = /^-?\d+$/;

    for (let i = 0; i < inputs.length; i++) {
        let tesRegex = integerRegex.test(inputs[i])
        if (tesRegex === false) return false
    }
    return true
}

// FUNCTION TOMBOL RESET
function reload() {
    window.location.reload()
}
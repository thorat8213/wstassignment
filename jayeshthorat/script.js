document.addEventListener("DOMContentLoaded", function () {

    const confirmBtn = document.getElementById("confirmBtn");

    confirmBtn.addEventListener("click", function () {
        saveStudentData();
        let modalEl = document.getElementById("confirmModal");
        let modal = bootstrap.Modal.getInstance(modalEl);
        modal.hide();
    });
});


function editStudent(index) {
    localStorage.setItem("editIndex", index);
    window.location.href = "student.html";
}

function openConfirmModal() {
    let modal = new bootstrap.Modal(document.getElementById("confirmModal"));
    modal.show();
    return false; 
}

function saveStudentData() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    let dob = document.querySelector('input[name="dob"]').value;
    let mobile = document.querySelector('input[name="mobile"]').value;
    let address = document.querySelector('textarea[name="address"]').value;
    let course = document.querySelector('select[name="course"]').value;

    if (name === "" || email === "") {
        alert("❌ Please fill Name and Email");
        return;
    }

    let student = { name, email, gender, dob, mobile, address, course };

    let students = JSON.parse(localStorage.getItem("students")) || [];
    let editIndex = localStorage.getItem("editIndex");

    if (editIndex !== null) {
        students[editIndex] = student;
        localStorage.removeItem("editIndex");
    } else {
        students.push(student);
    }

    localStorage.setItem("students", JSON.stringify(students));

    
    setTimeout(() => {
        window.location.href = "student_table.html";
    }, 300);
}



document.getElementById("myBtn").addEventListener("click", function() {
    document.getElementById("msg").textContent = "Button was clicked!";
});



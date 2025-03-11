
document.getElementById("gmail").addEventListener("click", function() {
    const email = "zanslandish@gmail.com";


    navigator.clipboard.writeText(email).then(() => {
        showAlert("Email copiado al portapapeles");
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});

function showAlert(message) {
    const alertContainer = document.getElementById("alert-container");

    const alertDiv = document.createElement("div");
    alertDiv.className = "alert alert-warning alert-dismissible fade show";
    alertDiv.setAttribute("role", "alert");
    alertDiv.innerHTML = `
        <strong></strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;


    alertContainer.appendChild(alertDiv);

 
    setTimeout(() => {
        alertDiv.classList.remove("show");
        alertDiv.classList.add("fade");
        setTimeout(() => alertDiv.remove(), 500);
    }, 3000);
}


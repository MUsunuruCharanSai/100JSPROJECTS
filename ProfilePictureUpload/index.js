const imageInput = document.getElementById("imageInput");
const profilePreview = document.getElementById("profilePreview");
const removeBtn = document.getElementById("removeBtn");
const fileName = document.getElementById("fileName");

const defaultImage = "https://via.placeholder.com/150";

imageInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    // Check file type
    if (!file.type.startsWith("image/")) {
        alert("Please select an image.");
        return;
    }

    // Check file size - 2MB
    if (file.size > 2 * 1024 * 1024) {
        alert("Image size must be less than 2MB.");
        return;
    }

    // Preview image
    const reader = new FileReader();

    reader.onload = function (event) {
        profilePreview.src = event.target.result;
    };

    reader.readAsDataURL(file);

    fileName.textContent = file.name;
});


// Remove image
removeBtn.addEventListener("click", function () {

    profilePreview.src = defaultImage;

    imageInput.value = "";

    fileName.textContent = "";
});
const uploadInput = document.getElementById('upload');
        const imgDisplay = document.getElementById('imgdisplay');

        uploadInput.addEventListener('change', function() {
            const selectedFile = uploadInput.files[0];
            if (selectedFile) {
                const objectURL = URL.createObjectURL(selectedFile);
                imgDisplay.src = objectURL;
            }
        });
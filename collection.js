var offbar = document.querySelector(".offbar")
var closeicon = document.getElementById("closeicon")

closeicon.addEventListener("click",function(){
    offbar.style.display="none"
})

var sidenavbar = document.querySelector(".sidenavbar")
var icon = document.getElementById("icon")
icon.addEventListener("click",function(){
    sidenavbar.style.left=0;
})

var closeiconside = document.getElementById("closeiconside")

closeiconside.addEventListener("click",function(){
    sidenavbar.style.left="-70%"
})




document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const images = document.querySelectorAll('.image1');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterImages);
    });

    function filterImages() {
        const selectedValues = getSelectedValues();

        images.forEach(image => {
            const imageText = image.querySelector('h2').textContent.toLowerCase();

            if (selectedValues.length === 0 || selectedValues.some(value => imageText.includes(value))) {
                image.classList.remove('hidden');
            } else {
                image.classList.add('hidden');
            }
        });
    }

    function getSelectedValues() {
        const checkedBoxes = document.querySelectorAll('input[name="check"]:checked');
        const selectedValues = [];
        checkedBoxes.forEach(box => {
            const label = box.parentElement.textContent.trim();
            if (label) {
                selectedValues.push(label.toLowerCase());
            }
        });
        return selectedValues;
    }
});

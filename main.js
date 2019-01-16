const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function check(e) {
    let inBetween = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            // console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                // console.log('start checking in between');
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', check));
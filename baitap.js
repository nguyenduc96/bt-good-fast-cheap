function check(value) {
    let good = document.getElementById("good");
    let cheap = document.getElementById("cheap");
    let fast = document.getElementById("fast");
    if (value == 'good') {
        if (fast.checked && cheap.checked) {
            cheap.checked = false;
        }
    } else if (value == 'cheap') {
        if (good.checked && fast.checked) {
            fast.checked = false;
        }
    } else {
        if(good.checked && cheap.checked){
            good.checked = false;
        }
    }
}
let max_count_of_click = 5;
let count_of_click = 0

function prev_card() {
    if (count_of_click > 0)
        count_of_click--;
    if (count_of_click >= 0) {
        if (window.innerWidth > 1000) {
            let distance = 480 * count_of_click;
        }
        else if (window.innerWidth > 700) {
            let distance = 300 * count_of_click;
        }
        else {
            let distance = 180 * count_of_click;
        }
        document.getElementById('slyder').style.position = "relative";
        document.getElementById('slyder').style.right = distance.toString() + "px";
    }
}

function next_card() {
    if (count_of_click >= 0 && count_of_click < max_count_of_click) {
        count_of_click++;
        if (window.innerWidth > 1000) {
            let distance = 480 * count_of_click;
        }
        else if (window.innerWidth > 700) {
            let distance = 300 * count_of_click;
        }
        else {
            let distance = 180 * count_of_click;
        }
        document.getElementById('slyder').style.position = "relative";
        document.getElementById('slyder').style.right = distance.toString() + "px";
    }
}
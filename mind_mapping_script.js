function colorchange(event, input) {
    if (input == 'one') {
        var item = event.target;
        item.style.background = "linear-gradient(to left, #9ab6fc 0%, #b4eafc 100%) #b8d7f9";
        item.nextElementSibling.style.background = "linear-gradient(to left, #9ab6fc 0%, #b4eafc 100%) #b8d7f9";
    } else if (input == 'two') {
        var item = event.target;
        item.style.background = "linear-gradient(to left, #9ab6fc 0%, #b4eafc 100%) #b8d7f9";
        item.previousElementSibling.style.background = "linear-gradient(to left, #9ab6fc 0%, #b4eafc 100%) #b8d7f9";
    }
}
function originalcolor(event, input) {
    if (input == 'one') {
        var item = event.target;
        item.style.background = "rgb(240, 240, 240)";
        item.nextElementSibling.style.background = "rgb(220, 220, 220)";
    } else if (input == 'two') {
        var item = event.target;
        item.style.background = "rgb(220, 220, 220)";
        item.previousElementSibling.style.background = "rgb(240, 240, 240)";
    }
}
var count = 0;
function expand(event, input) {
    if (count == 0) {
        if (input == 'one') {
            var item = event.target;
            item.nextElementSibling.nextElementSibling.style.display = "block";
            item.nextElementSibling.textContent = "-";
        } else if (input == 'two') {
            var item = event.target;
            item.nextElementSibling.style.display = "block";
            item.textContent = "-";
        }
        count++;
    } else if (count == 1) {
        if (input == 'one') {
            var item = event.target;
            item.nextElementSibling.nextElementSibling.style.display = "none";
            item.nextElementSibling.textContent = "+";
        } else if (input == 'two') {
            var item = event.target;
            item.nextElementSibling.style.display = "none";
            item.textContent = "+";
        }
        count--;
    }
}
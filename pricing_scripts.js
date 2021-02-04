var btn_annual = document.querySelector("button");
var btn_monthly = document.getElementById("btn_monthly");
console.log(btn_annual)
window.addEventListener("load",change_button_color);
function change_button_color(){
    btn_annual.setAttribute('class','btn-selected');
}

btn_monthly.addEventListener("click",change_button_color2);
btn_annual.addEventListener("click",change_button_color3);
function change_button_color2()
{
        btn_annual.setAttribute('class','btn-nonselected');
        btn_monthly.setAttribute('class','btn-selected');
}
function change_button_color3()
{
    btn_monthly.setAttribute('class','btn-nonselected');
    btn_annual.setAttribute('class','btn-selected');
}
function generate_feature()
{

}
var btn_feature = document.getElementById("feature-btn");
btn_feature.addEventListener('click',generate_feature);
btn_feature.addEventListener('mouseover',change_feature_color);
btn_feature.addEventListener('mouseout',change_feature_color_back);
function change_feature_color()
{
    btn_feature.style.backgroundColor = "gray";
}
function change_feature_color_back()
{
    btn_feature.style.backgroundColor = "#20c3fc";
}


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
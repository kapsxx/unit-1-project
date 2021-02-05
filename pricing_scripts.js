var plan = 0;
var members = 0;
var btn_annual = document.querySelector("button");
var btn_monthly = document.getElementById("btn_monthly");
var btn_usr_1 = document.getElementById("usr-1");
window.addEventListener("load",change_button_color);
function change_button_color(){
    btn_annual.setAttribute('class','btn-selected');
    btn_usr_1.setAttribute('class','btn-selected');
    plan = 1;
    members = 1;
}
btn_monthly.addEventListener("click",change_button_color2);
btn_annual.addEventListener("click",change_button_color3);
function change_button_color2()
{
        btn_annual.setAttribute('class','btn-nonselected');
        btn_monthly.setAttribute('class','btn-selected');
        plan = 2;
}
function change_button_color3()
{
    btn_monthly.setAttribute('class','btn-nonselected');
    btn_annual.setAttribute('class','btn-selected');
    plan = 1;
}
// btn_monthly.addEventListener('click',monthly_plans);
btn_monthly.addEventListener('click',yearly_plans);
function enteruser(number)
{
    var pro_rate = document.getElementById("pro_rate");
    var ult_rate = document.getElementById("ultimate-rate");
    var yearly_pro_rates = ["$10*","$9*","$8.75*","$8.63*","$8.50*","$8.44*","$8.38*","$8.25*","$8.13*","$8*"];
    var yearly_ult_rates = ["$13*","$11.7*","$11.38*","$11.50*","$11.34*","$11.25*","$11.17*","$11*","$10.84*","$10.67*"];
    var monthly_pro_rates = ["$13.33*","$12*","$11.67*","$8.63*","$8.50*","$8.44*","$8.38*","$8.25*","$8.13*","$8*"];
    var monthly_ult_rates = ["$17.33*","$15.60*","$15.17*","$14.95*","$14.74*","$14.63*","$14.52*","$14.30*","$14.09*","$13.87*"];
    var buttons_cont_users = document.getElementById("cont-users").children;
    for(var i = 1; i <= 11;i++)
    {
        if(i != number)
        {
            buttons_cont_users[i].setAttribute('class','btn-nonselected');
        }
        else
        {
            buttons_cont_users[i].setAttribute('class','btn-selected')
        }
    }
    if(plan == 1)
    {
        pro_rate.textContent = yearly_pro_rates[number-1];
        ult_rate.textContent = yearly_ult_rates[number-1];
    }
    if(plan == 2)
    {
        pro_rate.textContent = monthly_pro_rates[number-1];
        ult_rate.textContent = monthly_ult_rates[number-1];
    }
    members = number;
}
var index = 0;
function yearly_plans()
{
    var annual_bill =  document.getElementById("annual_bill");
    var annual_bill2 =  document.getElementById("annual_bill2");
    
    if(annual_bill.style.display == "none")
    {
        console.log(annual_bill.style.display);
        annual_bill.style.display = "block";
        annual_bill2.style.display = "block";

    }
    index++;
}
var btn_feature = document.getElementById("feature-btn");
// btn_feature.addEventListener('click',generate_feature);
btn_feature.addEventListener('mouseover',change_feature_color);
btn_feature.addEventListener('mouseout',change_feature_color_back);
btn_feature.addEventListener("click",display_feature);
function display_feature()
{
    var dis_feature = document.getElementById("disp-features");
    if(dis_feature.style.display == "none")
    {
        dis_feature.style.display = "block";
    }
    else
    {
        dis_feature.style.display = "none";
    }
}
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

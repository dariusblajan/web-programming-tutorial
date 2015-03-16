// show/hide more info
document.getElementById('show-info').onclick = function () {
    document.getElementById('more-info').style.display='inline';
    document.getElementById('show-info').style.display='none';
};

document.getElementById('hide-info').onclick = function () {
    document.getElementById('more-info').style.display='none';
    document.getElementById('show-info').style.display='inline';
};

//collapse/expand all widgets
function initAllWidgets() {
    function initWidget(widget) {
        widget.getElementsByClassName('header')[0].onclick = function () {
            if (widget.className == "widget") {
                widget.className = "widget collapsed";
            } else {
                widget.className = "widget";
            }
        }
    }

    var widgets = document.getElementsByClassName("widget");
    for (var i = 0; i < widgets.length; i++){
        initWidget(widgets[i]);
    }
}

// actions for top links
function initLinks() {
    var links = document.getElementById("top-menu").getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            document.getElementById("breadcrumb").innerHTML = this.innerHTML + " : " + this.title;
        }
    }
}
initAllWidgets();
initLinks();

var parametri = {
    name: 'Darius',
    phone: '1345287352'
};
$.ajax({
    url: 'index.html',
    data: parametri
})

$('.f1_container').click(function() {
    $(this).toggleClass('active');
});
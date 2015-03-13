// show/hide more info
document.getElementById('show-info').onclick = function () {
    document.getElementById('more-info').style.display='inline';
    document.getElementById('show-info').style.display='none';
};

document.getElementById('hide-info').onclick = function () {
    document.getElementById('more-info').style.display='none';
    document.getElementById('show-info').style.display='inline';
};

// collapse/expand news widget
var newsWidget = document.getElementById("news-widget");
newsWidget.getElementsByClassName("header")[0].onclick = function () {
    if (newsWidget.className == "widget") {
        newsWidget.className = "widget collapsed";
    } else {
        newsWidget.className = "widget";
    }
};

// collapse/expand help widget
var helpWidget = document.getElementById("help-widget");
helpWidget.getElementsByClassName("header")[0].onclick = function () {
    if (helpWidget.className == "widget") {
        helpWidget.className = "widget collapsed";
    } else {
        helpWidget.className = "widget";
    }
};

//collapse/expand new widget
var newWidget = document.getElementById("new-widget");
newWidget.getElementsByClassName("header")[0].onclick = function () {
    if (newWidget.className == "widget") {
        newWidget.className = "widget collapsed";
    } else {
        newWidget.className = "widget";
    }
};

//collapse/expand search widget
var searchWidget = document.getElementById("google-search");
searchWidget.getElementsByClassName("header")[0].onclick = function () {
    if (searchWidget.className == "widget") {
        searchWidget.className = "widget collapsed";
    } else {
        searchWidget.className = "widget";
    }
};

// actions for top links
var links = document.getElementById("top-menu").getElementsByTagName("a");
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById("breadcrumb").innerHTML = this.innerHTML + " : " + this.title;
    }
}

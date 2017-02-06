/*
var close = $(".nav-button--menu");
var pageNav = $(".page-header__mobile-menu");

close.on("click", function(event) {
  event.preventDefault();
  pageNav.toggleClass("page-header__mobile-menu--closed");
  close.toggleClass("nav-button--closed");
});

var close2 = $(".page-header__menu-btn");
var pageNav2 = $(".page-header__dropdown");

close2.on("click", function(event) {
  event.preventDefault();
  pageNav2.toggleClass("page-header__dropdown--closed");
  close2.toggleClass("page-header__menu-btn--closed");
});

var close3 = $(".page-header__nav-btn");
var pageNav3 = $(".page-header__nav");

close3.on("click", function(event) {
  event.preventDefault();
  pageNav3.toggleClass("page-header__nav--closed");
  close3.toggleClass("page-header__nav-btn--closed");
});
*/
/*
var closeBtnClassname = "page-footer__nav-link";
var closeBtn = $("." + closeBtnClassname);
var dropdownClassname = closeBtn.data("toggle");
var dropdown = $("." + dropdownClassname);

closeBtn.on("click", function(event) {
  event.preventDefault();
  console.log(event.target);
  $(this).next(dropdown).toggleClass(dropdownClassname + "--closed");
  $(this).toggleClass(closeBtnClassname + "--closed");
});
*/
function setDropdownToggle(toggleBtn) {
  var closeBtn = $("." + toggleBtn);
  var dropdownClassname = closeBtn.data("toggle");
  var dropdown = $("." + dropdownClassname);

  closeBtn.on("click", function(event) {
    event.preventDefault();
    console.log(event.target);
    $(this).parent().find(dropdown).toggleClass(dropdownClassname + "--closed");
    $(this).toggleClass(toggleBtn + "--closed");
  });
}

setDropdownToggle("nav-button--menu");
setDropdownToggle("page-header__menu-btn");
setDropdownToggle("page-header__nav-btn");
setDropdownToggle("page-footer__nav-link");
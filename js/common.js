$(document).ready(function() {
  function setDropdownToggle(toggleBtn) {
    var closeBtn = $("." + toggleBtn);
    var dropdownClassname = closeBtn.data("toggle");
    var dropdown = $("." + dropdownClassname);

    closeBtn.on("click", function(event) {
      event.preventDefault();
      console.log(event.target);
      var dropdownEl = ($(this).parent().hasClass(dropdownClassname)) ?
                       ($(this).parent()) :
                       ($(this).parent().find(dropdown));
      dropdownEl.toggleClass(dropdownClassname + "--closed");
      $(this).toggleClass(toggleBtn + "--opened");
    });
  }

  setDropdownToggle("nav-button--menu");
  setDropdownToggle("page-header__menu-btn");
  setDropdownToggle("page-header__nav-btn");
  setDropdownToggle("page-header__search-btn");
  setDropdownToggle("page-footer__nav-link");
  setDropdownToggle("page-header__flags-btn");

  var nextBtn = $(".main__history-nav-btn--next");
  var historyList = $(".main__history-nav-list");
  var historyItem = $(".main__history-nav-item");

  nextBtn.on("click", function(event) {
    historyList.animate({
      left: "-=150"
    });
    console.log(historyList.css.left);
    console.log(historyItem.css.width);
  });

});

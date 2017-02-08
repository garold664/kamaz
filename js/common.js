$(document).ready(function() {
  function setDropdownToggle(toggleBtn) {
    var closeBtn = $("." + toggleBtn);
    var dropdownClassname = closeBtn.data("toggle");
    var dropdown = $("." + dropdownClassname);

    closeBtn.on("click", function(event) {
      event.preventDefault();
      var dropdownEl = ($(this).parent().hasClass(dropdownClassname)) ?
                       ($(this).parent()) :
                       ($(this).parent().find(dropdown));
      dropdownEl.toggleClass(dropdownClassname + "--closed");
      $(this).toggleClass(toggleBtn + "--opened");
    });
  }

  setDropdownToggle("nav-button--menu");
  setDropdownToggle("page-header__menu-btn");
  setDropdownToggle("nav__btn");
  setDropdownToggle("page-header__search-btn");
  setDropdownToggle("page-footer__nav-link");
  setDropdownToggle("page-header__flags-btn");

  var nextBtn = $(".main__history-nav-btn--next");
  var prevBtn = $(".main__history-nav-btn--prev");
  var historyList = $(".main__history-nav-list");
  var historyItem = $(".main__history-nav-item");

  nextBtn.on("click", function(event) {
    historyList.animate({
      marginLeft: "-=150"
    }, function(){
      var ml = historyList.css("margin-left");
      if (ml == "-150px") {
        prevBtn.css("display", "inline-block")
      }
      if (ml == "-450px") {
        nextBtn.css("display", "none")
      }
    });
    
  });
  prevBtn.on("click", function(event) {
    historyList.animate({
      marginLeft: "+=150"
    }, function(){
      var ml = historyList.css("margin-left");
      if (ml == "0px") {
        prevBtn.css("display", "none");
      }
      if (ml == "-300px") {
        nextBtn.css("display", "inline-block");
      }

  });
});

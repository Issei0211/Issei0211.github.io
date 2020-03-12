// jQueryコード
$(function() {
  $("#top-wrapper").css("display","none").fadeIn("slow");
});

// JavaScriptコード
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("menuBtn").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("nav").classList.toggle("active");
  })
});

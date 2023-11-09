const input = document.getElementById("query");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && input.value !== null) {
    (document.getElementById("searchClick")).form.submit();
  }
});

const searchIcon = document.getElementsByClassName("icon")[0];

searchIcon.addEventListener("click", () => {
  if(input.value !== null)
  {
    (document.getElementById("searchClick")).form.submit();
  }
});

const countryDropDown = document.getElementById("con");

countryDropDown.addEventListener("change", function() {
    const selectCon = countryDropDown.value;
    if (selectCon) {
        (document.getElementById("countrySubmit")).form.submit();
    }
});

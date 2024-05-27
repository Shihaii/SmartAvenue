console.log("hi");
const handleScroll = () => {
  console.log("hi");
  let value = window.scrollY;
  console.log("value", value);
  if (value > 10) {
    document.getElementById("header").classList.add("header__white");
  } else {
    document.getElementById("header").classList.remove("header__white");
    console.log("else");
  }
};
document.addEventListener("scroll", handleScroll);

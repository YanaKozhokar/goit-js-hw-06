const inputFontControlHadler = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputFontControlHadler.addEventListener("input", () => {
  textRef.style = `font-size: ${inputFontControlHadler.value}px`;
});

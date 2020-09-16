export function getRandomColor() {
  return (
    "#" +
    Math.random()
      .toString(16)
      .slice(-6)
  );
}

export function socialistValues(e) {
  const index = Math.floor(Math.random() * 12);
  const socialistValuesArr = new Array(
    "富强",
    "民主",
    "文明",
    "和谐",
    "自由",
    "平等",
    "公正",
    "法治",
    "爱国",
    "敬业",
    "诚信",
    "友善"
  );
  const box = document.getElementById("app");
  const domSpan = document.createElement("span");
  let x = e.pageX;
  let y = e.pageY;
  domSpan.innerHTML = socialistValuesArr[index];
  domSpan.className = "text-popup";
  domSpan.style.left = `${x - 15}px`;
  domSpan.style.top = `${y - 15}px`;
  domSpan.style.color = getRandomColor();
  box.appendChild(domSpan);
  domSpan.addEventListener("animationend", function() {
    domSpan.parentNode.removeChild(domSpan);
  });
}

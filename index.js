window.addEventListener("load", () => {
  const text = document.querySelector(".dynamic");
  const currentDate = new Date();
  const deadline = new Date("2022/10/01");
  text.innerHTML = getDifference(deadline, currentDate);
});

function getDifference(deadline, currentDate) {
  let difference = deadline.getTime() - currentDate.getTime();
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return totalDays <= 0
    ? ""
    : totalDays === 1
    ? `Falta ${totalDays} día`
    : `Faltan ${totalDays} días`;
}

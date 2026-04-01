let timer;
let remainingTime = 0;
let totalWater = 0;

const timeDisplay = document.getElementById("time");
const statusDisplay = document.getElementById("status");

document.getElementById("startBtn").addEventListener("click", () => {
  const hours = document.getElementById("plan").value;
  remainingTime = hours * 3600;

  clearInterval(timer);

  timer = setInterval(() => {
    if (remainingTime <= 0) {
      clearInterval(timer);
      statusDisplay.textContent = "Completed";
      return;
    }

    remainingTime--;

    let h = Math.floor(remainingTime / 3600);
    let m = Math.floor((remainingTime % 3600) / 60);
    let s = remainingTime % 60;

    timeDisplay.textContent =
      "Time Remaining: " +
      `${String(h).padStart(2, "0")}:` +
      `${String(m).padStart(2, "0")}:` +
      `${String(s).padStart(2, "0")}`;

    statusDisplay.textContent = "Status: Fasting";
  }, 1000);
});

document.getElementById("resetBtn").addEventListener("click", () => {
  clearInterval(timer);
  timeDisplay.textContent = "Time Remaining: 00:00:00";
  statusDisplay.textContent = "Status: Not Started";
});

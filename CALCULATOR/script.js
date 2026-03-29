const display = document.getElementById("display");
const toggle = document.getElementById("themeToggle");

// Append value
function append(val) {
  display.value += val;
}

// Clear all
function clearDisplay() {
  display.value = "";
}

// Delete last char
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Theme toggle
toggle.onclick = () => {
  document.body.classList.toggle("light");
  toggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
};

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteLast();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
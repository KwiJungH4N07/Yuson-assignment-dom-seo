function highlight(element) {
  element.classList.toggle("highlight");
}

document.getElementById("darkModeBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    document.body.style.background = "#222";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "#f9f9f9";
    document.body.style.color = "#333";
  }
});

document.getElementById("tipForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const newTip = document.getElementById("newTip").value.trim();
  if (newTip) {
    const li = document.createElement("li");
    li.textContent = newTip;
    li.className = "tip";
    li.onclick = function() { highlight(this); };
    document.getElementById("tips").appendChild(li);
    document.getElementById("newTip").value = "";
  }
});

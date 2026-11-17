let data = JSON.parse(localStorage.getItem("studyflow")) || {
  topics: [],
  streak: 0,
  lastDate: null,
  sessions: 0
};

const quotes = [
  "Discipline beats motivation.",
  "Stay consistent.",
  "Small progress is still progress.",
  "Do it even when you don’t feel like it."
];

function save() {
  localStorage.setItem("studyflow", JSON.stringify(data));
}

function showQuote() {
  document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];
}

function addTopic() {
  const title = topicInput.value.trim();
  const subject = subjectInput.value.trim();

  if (!title || !subject) return;

  const priority = prompt("Priority: high / medium / low") || "low";

  data.topics.push({
    id: Date.now(),
    title,
    subject,
    priority,
    completed: false,
    date: new Date().toLocaleDateString()
  });

  topicInput.value = "";
  subjectInput.value = "";

  save();
  render();
}

function toggle(id) {
  const t = data.topics.find(x => x.id === id);
  t.completed = !t.completed;

  updateStreak();

  save();
  render();
}

function deleteTopic(id) {
  data.topics = data.topics.filter(t => t.id !== id);
  save();
  render();
}

function clearCompleted() {
  data.topics = data.topics.filter(t => !t.completed);
  save();
  render();
}

function updateStreak() {
  const today = new Date().toDateString();

  if (data.lastDate === today) return;

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  if (data.lastDate === yesterday.toDateString()) {
    data.streak++;
  } else {
    data.streak = 1;
  }

  data.lastDate = today;
}

function render() {
  const list = document.getElementById("list");
  const filter = document.getElementById("filter").value;
  const search = document.getElementById("searchInput").value.toLowerCase();

  list.innerHTML = "";

  let completed = 0;

  data.topics.forEach(t => {

    if (
      (filter === "pending" && t.completed) ||
      (filter === "done" && !t.completed) ||
      !t.title.toLowerCase().includes(search)
    ) return;

    const li = document.createElement("li");

    if (t.completed) {
      li.classList.add("completed");
      completed++;
    }

    li.innerHTML = `
      <div>
        <strong>${t.title}</strong><br>
        <small class="tag">${t.subject}</small><br>
        <small class="${t.priority}">${t.priority.toUpperCase()}</small><br>
        <small>${t.date}</small>
      </div>

      <div>
        <button onclick="toggle(${t.id})">✔</button>
        <button onclick="deleteTopic(${t.id})">🗑️</button>
      </div>
    `;

    list.appendChild(li);
  });

  const progress = data.topics.length
    ? Math.round((completed / data.topics.length) * 100)
    : 0;

  document.getElementById("progress").innerText = progress + "%";
  document.getElementById("streak").innerText = data.streak;
  document.getElementById("progressFill").style.width = progress + "%";
}

/* TIMER */
let time = 1500;
let interval = null;
let running = false;

function startTimer() {
  if (running) return;

  time = customTime.value ? customTime.value * 60 : 1500;

  running = true;

  interval = setInterval(() => {
    time--;
    updateTimer();

    if (time <= 0) {
      clearInterval(interval);
      running = false;

      data.sessions++;
      save();
      updateSessionUI();

      alert("Session complete!");
      resetTimer();
    }
  }, 1000);
}

function pauseTimer() {
  running = false;
  clearInterval(interval);
}

function endSession() {
  if (strictMode.checked) {
    alert("Strict mode is ON!");
    return;
  }

  clearInterval(interval);
  running = false;
  resetTimer();
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  running = false;

  time = customTime.value ? customTime.value * 60 : 1500;
  updateTimer();
}

function updateTimer() {
  const min = Math.floor(time / 60);
  const sec = time % 60;

  document.getElementById("timer").innerText =
    `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function updateSessionUI() {
  document.getElementById("sessionCount").innerText = data.sessions;
}

/* INIT */
showQuote();
render();
updateTimer();
updateSessionUI();
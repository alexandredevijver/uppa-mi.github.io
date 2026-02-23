const params = new URLSearchParams(window.location.search);
const cours = params.get("cours") || "index";

fetch("cours/" + cours + ".md")
  .then(res => res.text())
  .then(markdown => {
    document.getElementById("content").innerHTML = marked.parse(markdown);

    generateIds();
    generateSidebar();
    activateScrollSpy();

    renderMathInElement(document.getElementById("content"), {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "$", right: "$", display: false}
      ]
    });
  });

function generateIds() {
  document.querySelectorAll("#content h2, #content h3").forEach(h => {
    h.id = h.textContent.toLowerCase().replace(/[^\w]+/g, "-");
  });
}

function generateSidebar() {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  document.querySelectorAll("#content h2, #content h3").forEach(h => {
    const link = document.createElement("a");
    link.textContent = h.textContent;
    link.href = "#" + h.id;
    link.after.innerHTML = "<br>";

    if (h.tagName === "H3") {
      link.style.paddingLeft = "20px";
    }

    menu.appendChild(link);
  });
}

function activateScrollSpy() {
  const links = document.querySelectorAll("#menu a");
  const sections = document.querySelectorAll("#content h2, #content h3");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 120) {
        current = section.id;
      }
    });

    links.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
}
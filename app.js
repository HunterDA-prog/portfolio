"use strict";
const data = window.PORTFOLIO;
const categories = {
  malware: "MALWARE ANALYSIS",
  hunting: "THREAT HUNTING",
  intelligence: "THREAT INTELLIGENCE",
};
function el(tag, cls, text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
}
function safeUrl(value) {
  try {
    const u = new URL(value);
    return ["https:", "http:"].includes(u.protocol) ? u.href : null;
  } catch {
    return null;
  }
}
function external(label, url, cls) {
  const a = el("a", cls, label);
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}
document.title = data.title;
document
  .querySelectorAll("[data-name]")
  .forEach((n) => (n.textContent = data.name));
document.querySelector("#bio").textContent = data.bio;
document.querySelector('meta[name="description"]').content = data.bio;
document.querySelector("#year").textContent = new Date().getFullYear();
function renderProjects(filter) {
  const root = document.querySelector("#project-list");
  root.replaceChildren();
  const entries = data.projects.filter(
    (p) => filter === "all" || p.category === filter,
  );
  entries.forEach((p, i) => {
    const row = el("article", "project");
    const index = el("span", "project-index", String(i + 1).padStart(2, "0"));
    const body = el("div", "project-body");
    body.append(
      el("p", "eyebrow", categories[p.category] || p.category),
      el("h3", "", p.title),
      el("p", "muted", p.description),
    );
    const tags = el("ul", "tags");
    (p.tags || []).forEach((t) => tags.append(el("li", "", t)));
    body.append(tags);
    const end = el("div", "project-end");
    end.append(
      el("span", "status", p.example ? "Illustrative example" : p.status),
    );
    const url = safeUrl(p.url);
    end.append(
      url
        ? external("View project ↗", url, "text-link")
        : el("span", "pending", "Write-up coming soon"),
    );
    row.append(index, body, end);
    root.append(row);
  });
  if (!entries.length)
    root.append(el("p", "muted", "No projects in this category yet."));
  document.querySelector("#project-count").textContent =
    entries.length + " projects shown";
}
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((b) => {
      const selected = b === button;
      b.classList.toggle("active", selected);
      b.setAttribute("aria-pressed", String(selected));
    });
    renderProjects(button.dataset.filter);
  }),
);
renderProjects("all");
data.profiles.forEach((p, i) => {
  const url = safeUrl(p.url);
  const card = url
    ? external("", url, "social")
    : el("div", "social unavailable");
  card.append(
    el("span", "social-number", "0" + (i + 1) + " / " + p.label),
    el("h3", "", p.name + (url ? " ↗" : "")),
    el("p", "", p.detail),
    el(
      "span",
      "social-action",
      url ? "Visit profile ↗" : "Profile coming soon",
    ),
  );
  document.querySelector("#socials").append(card);
});
const contact = document.querySelector("#contact");
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
  contact.append(document.createTextNode("Want to connect? "));
  const a = el("a", "text-link", data.email);
  a.href = "mailto:" + encodeURIComponent(data.email);
  contact.append(a);
} else {
  contact.textContent =
    "Professional profile links will appear here when available.";
}

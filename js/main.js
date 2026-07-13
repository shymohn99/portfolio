document.documentElement.classList.add("js");

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const setMenu = (open) => {
  if (!nav || !navToggle) return;
  nav.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("nav-open", open);
  const label = navToggle.querySelector(".sr-only");
  if (label) label.textContent = open ? "メニューを閉じる" : "メニューを開く";
};

navToggle?.addEventListener("click", () => {
  setMenu(navToggle.getAttribute("aria-expanded") !== "true");
});

nav?.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) setMenu(false);
}, { passive: true });

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const revealItems = document.querySelectorAll("[data-reveal]");
if (reduceMotion.matches || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6%" });

  revealItems.forEach((item) => revealObserver.observe(item));
}

// Fail open if a browser delays or suppresses intersection callbacks.
window.setTimeout(() => {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}, 1600);

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

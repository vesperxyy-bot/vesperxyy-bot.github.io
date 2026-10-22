"use strict";
const photos = Array.from(document.querySelectorAll(".photo"));
const dialog = document.querySelector("#lightbox");
const fullImage = document.querySelector("#full-image");
const counter = document.querySelector("#counter");
let current = 0;
let opener;
document.querySelector("#year").textContent = new Date().getFullYear();
function showPhoto(index) {
  current = (index + photos.length) % photos.length;
  fullImage.src = photos[current].href;
  fullImage.alt = photos[current].querySelector("img").alt;
  counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(photos.length).padStart(2, "0")}`;
}
// 不支持 dialog 或禁用 JavaScript 时，图片链接仍可直接打开原图。
if (typeof dialog.showModal === "function") {
  photos.forEach((photo, index) => photo.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    opener = photo;
    showPhoto(index);
    dialog.showModal();
    document.body.classList.add("viewing");
    dialog.querySelector(".close").focus();
  }));
  dialog.querySelector(".close").addEventListener("click", () => dialog.close());
  dialog.querySelector(".previous").addEventListener("click", () => showPhoto(current - 1));
  dialog.querySelector(".next").addEventListener("click", () => showPhoto(current + 1));
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showPhoto(current + (event.key === "ArrowRight" ? 1 : -1));
    }
  });
  dialog.addEventListener("click", (event) => { if (event.target === dialog || event.target.classList.contains("viewer")) dialog.close(); });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("viewing");
    if (opener) opener.focus();
  });
}

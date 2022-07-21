import "./sass/main.scss";

async function writeName(): Promise<void> {
  const WhoIAmEl = document.querySelector(
      "#greeting-content-text-heading-whoiam"
    ) as HTMLElement,
    TextCursor = document.querySelector(
      "#greeting-content-text-heading-text-cursor"
    ) as HTMLElement,
    Str = WhoIAmEl.textContent as string;
  WhoIAmEl.textContent = "";
  TextCursor.classList.remove("blinker-effect");
  for (let char of Str) {
    await new Promise((resolve) => setInterval(resolve, 400));
    WhoIAmEl.textContent += char;
  }
  TextCursor.classList.add("blinker-effect");
}

function projectsOver(): void {
  if (matchMedia("(pointer: fine)")) {
    const projectDivs = document.querySelectorAll(
        ".projects-div"
      ) as NodeListOf<HTMLElement>,
      projectDivsImgs = document.querySelectorAll(
        ".projects-div-img"
      ) as NodeListOf<HTMLElement>;
    projectDivs.forEach((el) => {
      el.addEventListener("mouseover", () => {
        (el.lastElementChild as HTMLElement).style.display = "flex";
      });
      el.addEventListener("mouseleave", () => {
        (el.lastElementChild as HTMLElement).style.display = "none";
      });
    });
    projectDivsImgs.forEach((el) => {
      el.getClientRects()[0].top;
    });
  }
}

function main() {
  writeName();
  projectsOver();
}

window.addEventListener("load", main);

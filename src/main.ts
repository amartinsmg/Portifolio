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
  if (
    !matchMedia("(pointer: fine)").matches 
  )
    return void 0;
  const projectDivs = document.querySelectorAll(
    ".projects-div"
  ) as NodeListOf<HTMLElement>;
  projectDivs.forEach((el) => {
    const elInner = el.lastElementChild as HTMLElement;
    elInner.classList.add("display-none");
    el.addEventListener("mouseover", () => {
      elInner.classList.remove("display-none");
    });
    el.addEventListener("mouseleave", () => {
      elInner.classList.add("display-none");
    });
  });
}

function main() {
  writeName();
  projectsOver();
}

window.addEventListener("load", main);

import "./sass/main.scss";

function main() {
  const WhoIAmEl = document.querySelector("#whoiam") as HTMLElement,
    TextCursor = document.querySelector("#text-cursor") as HTMLElement,
    WriteName = async () => {
      const Str = WhoIAmEl.textContent as string;
      WhoIAmEl.textContent = "";
      TextCursor.classList.remove("blinker-effect");
      for (let char of Str) {
        await new Promise((resolve) => setInterval(resolve, 400));
        WhoIAmEl.textContent += char;
      }
      TextCursor.classList.add("blinker-effect");
    };

  WriteName();
}

window.addEventListener("load", main);

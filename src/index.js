const input = prompt("Введіть цифру від 0 до 7 для перевірки прав доступу:");

switch (input) {
  case "0":
    console.log("---");
    break;
  case "1":
    console.log("--x");
    break;
  case "2":
    console.log("-w-");
    break;
  case "3":
    console.log("-wx");
    break;
  case "4":
    console.log("r--");
    break;
  case "5":
    console.log("r-x");
    break;
  case "6":
    console.log("rw-");
    break;
  case "7":
    console.log("rwx");
    break;

  default:
    console.log(
      "Помилка! Введено некоректне значення. Будь ласка, введіть число від 0 до 7.",
    );
    break;
}

const cursor = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   \n'];

let timer = 100;

cursor.forEach(element => {
  setTimeout(() => {
    process.stdout.write(element);
  }, timer);
  timer += 200;
});
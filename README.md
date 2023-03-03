
## Prerequisites
- This project was created using Node.js v19.6
- Ideally, you should use the project in a Unix (Linux) environment. If you are on Windows, it is recommended to use [Windows Subsystem Linux](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10) as Linux commands are shown in classes that may not exist on Windows.

## Running

- Run `npm ci` in the folder containing the `package.json` file to restore the packages
- Run `npm start` and go to your browser at [http://localhost:3000](http://localhost:3000) to view the above page

## Checklist Features
- Titles List
  - [x] - The search field should not crash when typing the search term
  - [x] - It should draw hands on screen and make background elements still clickable 🙌
  - [x] - Should trigger scroll up when using open palm 🖐
  - [x] - Must trigger scroll down when using closed palm ✊
  - [x] - Must trigger click on nearest element when using pinch gesture 🤏🏻
  - [x] - When moving elements on the screen, it should trigger the event**:hover** in elements in context

- Video Player
  - [x] - It should be possible to play or pause videos in the blink of an eye 😁
  - [x] - All machine learning processing must be done through a web worker

### Challenges
- [] - Lesson 01 - Differentiate between left and right eye blinks and update the log to show which eye blinked.
- [] - Lesson 02 - Recognize individual hand gestures and print in the record
- [] - Lesson 03 - Correct video title banner, to be behind the hand drawing and to be clickable
- [] - Lesson 04 - Using virtual hands also in Video Player

### Classes and Links:
- Reuni todos os links em[referências](./referencias.md)
- JSExpertMax Gesture Controller - Semana JS Expert 7.0[Seventh Javascript Expert Week](https://github.com/ErickWendel/semana-javascript-expert07)🌟

### FAQ
- browser sync is throwing errors on Windows and never boots:
  - Solution: Replace browser sync with http server.
    1. install **http-server** with `npm i -D http-server`
    2. in package.json, delete all `browser-sync` commands and replace them with `npx http-server .`
    3. Now the project will be running on :8080 so go to the browser and try accessing http://localhost:8080/
  The only thing is that the project won't restart when you change some code, you have to press F5 on the page every time you change something

### Credits to Layout
- Project based interface[Streaming Service](https://codepen.io/Gunnarhawk/pen/vYJEwoM) de [gunnarhawk](https://github.com/Gunnarhawk)

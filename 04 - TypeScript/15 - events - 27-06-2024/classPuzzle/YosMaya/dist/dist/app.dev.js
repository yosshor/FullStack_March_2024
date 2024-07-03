"use strict";

function handleClicked(event) {
  console.log(event);
  console.log(event.x);
  console.log(event.y);
  var dom = WriteToDom(event.x, event.y);
  console.log(dom);
}

function WriteToDom(x, y) {
  try {
    var clickEvent = document.getElementById('#clicked');
    console.log(clickEvent);
    var addDiv = document.createElement('div');
    addDiv.style.width = '10px';
    addDiv.style.height = '10px';
    addDiv.style.backgroundColor = 'red';
    addDiv.style.top = y + "px";
    addDiv.style.left = x + "px";
    addDiv.style.position = 'absolute';
    addDiv.style.transform = 'translate(+50%,+50%)';
    clickEvent === null || clickEvent === void 0 ? void 0 : clickEvent.appendChild(addDiv); // clickEvent?.innerText += clickEvent;

    return "\n            <div style=\"width:10px;height:10px;background-color:red;top:" + y + "px;left:" + x + "px;position: absolute\"></div>\n        ";
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function handleChange(event) {
  var text = event.target.value;
  console.log(event);
  var p = document.getElementById('#upper');
  p === null || p === void 0 ? void 0 : p.innerHTML = text.toUpperCase();

  if (text.length > 5) {
    p === null || p === void 0 ? void 0 : p.style.color = 'green';
  }

  console.log(text.toUpperCase());
}

function handleClickMakeBigger(event) {
  try {
    // const buttonId = document.getElementById("buttonId");
    // buttonId?.style.width += '10px'
    var button = event.target.style.width.split('px')[0] * 1.1;
    event.target.style.width += button + 'px';
    console.log(button);
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function disappear() {
  try {
    var disappear_1 = document.getElementById('catch');
    disappear_1 === null || disappear_1 === void 0 ? void 0 : disappear_1.style.display = 'none';
    console.log('clicked');
  } catch (error) {
    console.error(error);
    return undefined;
  }
}
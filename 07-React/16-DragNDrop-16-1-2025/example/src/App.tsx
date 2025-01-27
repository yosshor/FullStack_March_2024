
import { useState } from "react";
import styles from "./App.module.scss";

function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [grabPointDelta, setGrabPointDelta] = useState({ deltaX: 0, deltaY: 0 })

  function handleDragEnd(event: React.DragEvent<HTMLDivElement>) {
    console.log("new Position: ", event.clientX - grabPointDelta.deltaX, event.clientY - grabPointDelta.deltaY)
    setPosition({ x: event.clientX, y: event.clientY});
  }
  function handleDragStart(event: React.DragEvent<HTMLDivElement>) {
    console.log("Previous: ", position.x, position.y)
    console.log("dragPoint: ", event.clientX, event.clientY)
    setGrabPointDelta({
      deltaX: event.clientX - position.x,
      deltaY: event.clientY - position.y,
    });
  }


  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    console.log("dragOver")
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    console.log("drag leave")
  }

  function handleDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setPosition({ x: event.clientX - grabPointDelta.deltaX, y: event.clientY - grabPointDelta.deltaY });
  }

  return (
    <>
      <div
        className={styles.box}
        draggable
        onDragEnd={handleDragEnd}

        onDragStart={handleDragStart}
        style={{ left: position.x, top: position.y }}
      />

      <div>
        <h2>Drag me around</h2>
        <p>Position: {position.x}, {position.y}</p>
      </div>
      <div 
      className={styles.dropZone}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        Drop Zone

      </div>

    </>
  )
}

export default App

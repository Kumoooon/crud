import Draggable from "react-draggable";
import { useState, useRef } from "react";
import Axios from "axios";

function Modal() {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  let [id, setid] = useState(0);
  let [name, setName] = useState("");
  let [title, setTitle] = useState("");
  let [text, settext] = useState("");
  const addEmployee = () => {
    Axios.post("http://localhost:3001/users/create", {
      id: id,
      name: name,
      title: title,
      text: text,
    }).then(() => {
      console.log("success");
    });
  };
  const updateEmployee = () => {
    Axios.put("http://localhost:3001/users/id", {
      id: id,
      name: name,
      title: title,
      text: text,
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <Draggable onDrag={(e, data) => trackPos(data)} nodeRef={nodeRef}>
      <div ref={nodeRef} className="box">
        <div className="information">
          <label>id:</label>
          <input
            type="text"
            onChange={(e) => {
              setid(e.target.value);
            }}
          />
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>title:</label>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label>text:</label>
          <input
            style={{ height: "50px" }}
            type="text"
            onChange={(e) => {
              settext(e.target.value);
            }}
          />
          <button onClick={addEmployee}>저장</button>
          <button onClick={updateEmployee}>수정</button>
        </div>
      </div>
    </Draggable>
  );
}
export default Modal;

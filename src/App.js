import { useSelector } from "react-redux";
import "./App.css";

function App() {

  // 스토어 조회
  const todoStore = useSelector((state) => state);
  console.log(todoStore);

  return (
    <div className="App">
      <div>
        <div>My Todo List</div>
        <div>React</div>
      </div>

      <div className="input-area">
        제목&nbsp;
        <input name="title" />
        내용&nbsp;
        <input name="content" />
        <button>추가하기</button>
      </div>

      <h3>진행 중...🔥</h3>
      <div>
        <div>상세보기</div>
        <div>제목</div>
        <div>내용</div>
        <button>삭제</button>
        <button>완료</button>
      </div>

      <h3>완료...🎉</h3>
      <div>
        <div>제목</div>
        <div>내용</div>
        <button>삭제</button>
        <button>취소</button>
      </div>
    </div>
  );
}

export default App;

# My Todo List

### Goal
- **react-router-dom**, **styled-components**, **redux**를 사용해서 My Todo List 만들기

---

### Features
- Create Todo
- Read Todos, Todo
- Update Todo
- Delete Todo

---

### Requirement
- 공통
  - todos 데이터는 리덕스를 사용해서 **전역**으로 상태를 관리
  - todos 모듈은 **Ducks 패턴**으로 구현

- 메인 페이지
  - 디자인과 화면 구성은 자유롭게
  - Todo의 상태에 "완료" 그룹과 "진행중" 그룹을 나뉘어서 보이도록 구현
  - Todo를 추가하면  제목 `input`과 내용 `input`은 다시 빈 값이 되도록 구현
  - input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화 되도록 구현
  - Todo의 완료상태가 `true`이면 상태 버튼의 라벨을 "취소",  `false` 이면 라벨을 "완료" 로 보이도록 구현
  - 전체 화면의 최대 넓이는 **1200px**, 최소 넓이는 **8800px**로 제한하고, 컨텐츠를 화면의 가운데로 배치
  - **`상세보기`** 클릭하면 Todo의 상세 페이지로 이동

---

### Why?
1. 상세 페이지 이동을 위해 react-router-dom 라이브러리를 사용하셨을 거예요. **CRA 라우팅**이란?

2. Redux를 사용하여 애플리케이션의 상태 관리를 하셨을 것입니다. 어떤 상태들을 Redux로 관리하셨나요? 그 상태 값을 Redux를 통해 관리함으로 얻은 이점은 무엇이었나요?

3. Redux의 reducer 함수는가 애플리케이션 로직과 어떻게 상호작용하는지 설명해 주세요.

4. CSS in JS 라이브러리 중 하나인 "styled component"를 사용했을 때의 이점은 많습니다.  CSS in JS가 제공하는 이점을 두 가지만 설명해 주세요.

5. useEffect hook을 사용한 부분이 있다면, 왜 사용해야 했고, 해당 hook이 언제 실행되는지 설명해주세요.
const todos = [];

const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

function addTodo() {
    const input = document.getElementById("todoInput"); //htmld에 todoInput 찾기
    const value = input.value.trim(); // 앞 뒤 공백 제거
    
    if (value){
        todos.push(value);
        input.value=""; // 입력창 비우기
        renderTodos(); // 화면 갱신
    }
}

function renderTodos() { // 매번 목록 전체를 새로 그리기. 
    const list = document.getElementById("todoList");
    list.innerHTML=""; // 기록 지우기

    // 블록 한 줄씩 해석하기
    todos.forEach((todo, index) => { //todo: 배열의 값, index 번호
        const li = document.createElement("li"); //html의 li 태그를 새로 하나 만듭니다.
        li.textContent = todo; // li 안에 할 일 텍스트 넣기
        li.onclick = () => removeTodo(index); // 클릭시 removeTodo로
        list.appendChild(li); // ul 목록에 실제로 붙이기

        // <ul id="todoList">
                //<li>청소하기</li>  ← 붙여짐
        // </ul>
    })
}

function removeTodo(index){
    todos.splice(index, 1); // 인덱스 1누르면 (1,1)
    renderTodos(); // 화면 갱신
}

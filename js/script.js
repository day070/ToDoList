const todoName = document.getElementById("todo-name");
const btnSimpan = document.getElementById("btn-simpan");
btnSimpan.addEventListener("click", function () {
  if (todoName.value == 0) {
    alert("Nama Todolist tidak Boleh Kosong!");
  } else {
    let todoContainer = document.querySelector(".list-group");
    let todoHTML = todoContainer.innerHTML;
    todoHTML += `          
        <li class="list-group-item">
            <input class="form-check-input me-1" type="checkbox" />
            <label class="form-check-label" for="firstCheckbox"
              ><span>${todoName.value}</span></label
            >
        </li>`;
    todoContainer.innerHTML = todoHTML;
    todoName.value = "";
    todoName.focus();

    let todoCheck = document.querySelectorAll('.form-check-input me-1"');
  }
});

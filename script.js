document.getElementById('add').onclick = function() {
    let title = document.querySelector(".title input").value;
    let description = document.querySelector(".description input").value;
    let day = document.querySelector("#day").value;
    let priority = document.querySelector("#priority").value;

    let task = "<li><b>Title:</b> " + title + "<ul><li><b>Description:</b> " + description + "</li><li><b>Due On:</b> " + day + "</li><li><b>Priority:</b> " + priority + "</li></ul></li>";
    document.querySelector(".tasks").innerHTML += task;
}

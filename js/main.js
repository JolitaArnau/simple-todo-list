// marks a todo as completed or unmarks it order to make it reverse it and make it appear as a non-completed task
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// "deletes" a todo from the list's UI, with a fadeOut effect
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// adds todos when the user types a new todo in the input field, by hitting enter
$("input[type='text']").keypress(function (event) {
    if(event.which === 13) {
        var newToDoValue = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + newToDoValue + "</li>")
    }
});

// fades the input field in and out when clicking on the plus icon

$(".fa-plus-circle").click(function () {

    $("input[type='text']").fadeToggle();
});
$( "document" ).ready(function() {
    $("button").click(function(){
    let userInput = $("input").val();
    let slicer = userInput.slice(1);
    let pigLatin = userInput.charAt(0);
    $(".output").text(`${slicer}${pigLatin}ay`);
    });
});
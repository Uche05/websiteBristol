document.addEventListener("DOMContentLoaded", function (){

    const checkbox = getElementsById(nav-tog);
    const header_div = getElementsByClassName(header_div);

    //add event-listener to the div!
    header_div.addEventListener("click", function(){
        if(checkbox.checked){
            header_div.style.position = "";
        }
        else{
            // write the original style for the header-div out.
        }
    });
});
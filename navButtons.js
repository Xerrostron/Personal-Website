

/*Getting elements by class name returns an HTML collection this is Dynamic*/
/*alternative way to select: */
/*document.querySelectorAll(.navButton)* This is static*/
const buttons = document.querySelectorAll(".navButton");
buttons.forEach(button => {
    button.addEventListener("click", function()
{
    const value = this.value;
    if(value==="About")
    {
        loadAboutPage();
    }
    if(value==="Browse")
    {
        loadBrowsePage();
    }
    else{
        console.log("Unknown value.");
    }
});
});

function loadAboutPage()
{
    const contentDiv = document.querySelector(".blogPost");
    contentDiv.innerHTML =
    `
    <h1>sup</h1>
    <p>About Page</p>
    `;
}
function loadBrowsePage()
{
    const contentDiv = document.querySelector(".blogPost");
    contentDiv.innerHTML = 
    `
    <h1>sup</h1>
    <p>Browse Page</p>
    `;

}



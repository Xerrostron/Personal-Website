

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
    <main>
    <h1>What Is This Blog About?</h1>
    <p>This blog is used to share ideas and opinions about video games. The blog seeks to
    bring forth thoughtful ideas about game design, user experience, and passionate kinship in respect to the Gaming industry!</p>
    <br>
    <p> For business inquiries, contact me! </p>
    </main>
    `;
}
function loadBrowsePage()
{
    //NOTE: innterHTML does NOT ACTIVATE A SCRIPT!
    const contentDiv = document.querySelector(".blogPost");
    contentDiv.innerHTML = 
    `
    <main>
    <h1>Try Some Other Articles!</h1>
    </main>
    `;
    //loadArticleTitlesRevised(); this method might not work because of scope with contentDiv
    const mainBlock = contentDiv.querySelector("main");

    blogPosts.forEach(post => {
        const button = document.createElement("button"); 
        button.textContent = post.title; 
        button.setAttribute("class", "blog-title");
        mainBlock.appendChild(button); 
        mainBlock.appendChild(document.createElement("br"));
    });

}
const blogPosts =[{
    paragraphs:["Hello my friend!", "Awesome stuff you have here!"],
    title:"A warm welcome!",
    author:"Sammy Martinez"
},{
    paragraphs:["Everybody gets one."],
    title:"Spider-Man",
    author:"Jymothy Greene"
}];
function loadArticleTitlesNaive()
{
    let titleArray = [];
    blogPosts.forEach(post => {
        titleArray.push(post.title); //post is a placeholder variable representing each object in blogPosts
    });
    for(let i = 0; i < titleArray.length; ++i)
    {
        console.log(titleArray[i]);
    }
}
function loadArticleTitlesRevised()
{
    const mainBlock = contentDiv.querySelector("main");

    // Loop through the blog posts and create <p> elements for each title
    blogPosts.forEach(post => {
        const paragraph = document.createElement("p");
        paragraph.textContent = post.title; // Set the title as the text content
        mainBlock.appendChild(paragraph); // Append the <p> element to the <main> block
    });
}



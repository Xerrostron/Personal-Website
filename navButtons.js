

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
        //now have buttons: blog-title class name
        const titleButtons = document.querySelectorAll(".blog-title");
        titleButtonFunctionality(titleButtons);
    });

}
function titleButtonFunctionality(titleButtons)
{
    titleButtons.forEach(titleButton=>{
        titleButton.addEventListener("click", function()
        {
            const titleButtonContent = titleButton.textContent;
            loadBlogPost(titleButtonContent);

        });
    
    });
}
function loadBlogPost(title)
{
    for(let i = 0; i<blogPosts.length; ++i)
    {
        if(title===blogPosts[i].title)
        {
             //NOTE: innterHTML does NOT ACTIVATE A SCRIPT!
          const contentDiv = document.querySelector(".blogPost");
          contentDiv.innerHTML = 
            `
            <main>
           </main>
            `;
           
           const mainBlock = contentDiv.querySelector("main");
           const header = document.createElement("h1");
           header.textContent = blogPosts[i].title;
           mainBlock.append(header);
           const paragraphs = processParagraphs(blogPosts[i]);
           //use J for an inner array
           for(let j = 0; j< paragraphs.length;++j)
           {
                mainBlock.appendChild(paragraphs[j]);
           }

        }
    }
}
function processParagraphs(post)
{
    const HTMLArray =[]; //can i make an Array of HTML elements?
    for(let i =0; i<post.paragraphs.length;++i)
    {
        let pElement = document.createElement("p");
        //USE INNER HTML VS. JUST TEXTCONTENT TO RENDER IN-LINE HTML!
        pElement.textContent = post.paragraphs[i];
        console.log(post.paragraphs[i]);
        
        HTMLArray.push(pElement);
    }
    return HTMLArray;
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



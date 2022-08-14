window.onload = getAllNewsItems;


let getAllNewsItemsRequest = new XMLHttpRequest();
// 0
// The request is not initialized.
// After you have created the XMLHttpRequest object, but before you have called the open() method.

function getAllNewsItems() {
    getAllNewsItemsRequest.open("GET", "Controller?command=All", true);
    // 1
    // The request has been set up.
    // After you have called the open() method, but before you have called send().
    getAllNewsItemsRequest.onreadystatechange = showAllNewsItems;
    // mag NIET showRandomLector() zijn
    // want dat wordt het maar 1 keer uitgevoerd
    // en het moet telkens wanneer de readystate van het xhr veranderd worden uitgevoerd
    getAllNewsItemsRequest.send();
    // 2
    // The request has been sent.
    // After you have called send().
}

// 3
// The request is in process.
// After the browser has established a communication with the server, but before the server has completed the response.

// 4
// The request is completed.
// After the request has been completed, and the response data has been completely received from the server.

// callback function
function showAllNewsItems() {
    if (getAllNewsItemsRequest.readyState == 4) {
        if (getAllNewsItemsRequest.status == 200) {
            fetch("Controller?command=All")
                .then(response => response.json())
                .then(newsitemfromfetch => fetchWrapper(newsitemfromfetch));
        }
    }
}


let addNewsItembutton = document.getElementById('addNewsItemButton');
addNewsItembutton.onclick = addNewsItem;
let addNewsItemRequest = new XMLHttpRequest();

function addComment(index){
    let i = parseInt(index) - 1
    let tmpText = document.getElementById("content"+ i).value;
    let tmpAuthor = document.getElementById("author" + i).value;
    let info = "content=" + encodeURIComponent(tmpText) + "&author=" + encodeURIComponent(tmpAuthor) + "&id=" + encodeURIComponent(index);
    fetch('Controller?command=AddComment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: info
    })
    document.getElementById("content"+ i).value = ""
    document.getElementById("author" + i).value = "";
}

function addNewsItem() {
    let title = document.getElementById("newsItemTitle").value;
    let text = document.getElementById("newsItemText").value;
    let author = document.getElementById("newsItemAuthor").value;
    // encodeURIComponent om UTF-8 te gebruiken en speciale karakters om te zetten naar code
    let information = "title=" + encodeURIComponent(title) + "&text=" + encodeURIComponent(text) + "&author=" + encodeURIComponent(author);
    addNewsItemRequest.open("POST", "Controller?command=Add", true);
    // belangrijk dat dit gezet wordt anders kan de servlet de informatie niet interpreteren!!!
    // protocol header information
    addNewsItemRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    addNewsItemRequest.send(information);
}

function fetchWrapper(newsitemsFromFetch) {
    let allEmptyBoxes = document.getElementsByClassName("mustBeEmpty");
    for (let i = 0; i < allEmptyBoxes.length; i++){
        if (allEmptyBoxes[i].value.length !==0 || document.activeElement === allEmptyBoxes[i])
        {
            setTimeout(getAllNewsItems, 1000);
            return;
        }
    }

    let newsitem = JSON.parse(getAllNewsItemsRequest.responseText);

    let newsitemdiv = document.getElementById("newsItems");
    newsitemdiv.innerHTML = "";
    for (let i = 0; i < newsitem.length; i++) {
        let newsitemauthor = document.createTextNode("~ " + newsitem[i].author + "    ")
        let newsitemtitle = document.createTextNode("#" + newsitem[i].id + ": " + newsitem[i].title)
        let newsitemtext = document.createTextNode(newsitem[i].text)
        let newsitemdate = document.createTextNode(newsitem[i].date.dayOfMonth + "/" + newsitem[i].date.monthValue + "/" + newsitem[i].date.year)
        var linebreak = document.createElement('br');
        let newsitemText = document.createTextNode(newsitem[i].title + " " + newsitem[i].text + " " + newsitem[i].author + " " + newsitem[i].date.dayOfMonth + "/" + newsitem[i].date.monthValue + "/" + newsitem[i].date.year); // kan ook lector["name"]
        newsItemParagraph = document.createElement('article');


        //content
        newsItemParagraph.appendChild(newsitemtitle);
        var br = document.createElement("br");
        newsItemParagraph.appendChild(br);
        var br = document.createElement("br");
        newsItemParagraph.appendChild(br);
        newsItemParagraph.appendChild(linebreak)
        newsItemParagraph.appendChild(newsitemtext)

        //general info
        newsItemParagraph.appendChild(linebreak)
        var generalInfo = document.createElement("i");
        generalInfo.appendChild(newsitemauthor)
        generalInfo.appendChild(newsitemdate)
        newsItemParagraph.append(generalInfo);

        //comments title
        let commentTitle = document.createElement("h3")
        commentTitle.innerHTML = "Comments:"
        newsItemParagraph.appendChild(commentTitle)

        //comments
        let commentSection = document.createElement("div")
        for (let j = 0; j < newsitem[i].comments.length && j < 5; j++) {
            let tmp = newsitemsFromFetch[i].comments.length - j - 1
            let commentdate = newsitemsFromFetch[i].comments[tmp].date.dayOfMonth + "/" + newsitemsFromFetch[i].comments[tmp].date.monthValue + "/" + newsitemsFromFetch[i].comments[tmp].date.year
            let comment = newsitemsFromFetch[i].comments[tmp].author + " @ " + commentdate + ": " + newsitemsFromFetch[i].comments[tmp].content
            let commentTextNode = document.createElement("p");
            commentTextNode.innerHTML = comment;
            commentSection.appendChild(commentTextNode);
            commentSection.appendChild(linebreak);
        }
        newsItemParagraph.appendChild(commentSection);

        ///////////////////////
        ////ADDCOMMENTBOXES////
        ///////////////////////

        //root element
        let addComment = document.createElement("div")

        //Title
        let addCommentTitle = document.createElement("h3")
        addCommentTitle.innerHTML = "Leave a comment:"
        addComment.appendChild(addCommentTitle)

        //Author label
        let authorTitle = document.createElement("h4")
        authorTitle.innerHTML = "Author:"
        addComment.appendChild(authorTitle)

        //Author input box
        let authorBox = document.createElement("input");
        authorBox.setAttribute("type","text");
        authorBox.setAttribute("id", "author" + i)
        authorBox.classList.add("mustBeEmpty")
        addComment.appendChild(authorBox);

        //Comment label
        let contentTitle = document.createElement("h4")
        contentTitle.innerHTML= "Your comment:"
        addComment.appendChild(contentTitle)

        //Comment input box
        let contentBox = document.createElement("input");
        contentBox.setAttribute("type", "text");
        contentBox.setAttribute("id", "content" + i)
        contentBox.classList.add("mustBeEmpty")
        addComment.appendChild(contentBox);

        addComment.appendChild(linebreak);

        //Submit button
        let commentSubmitButton = document.createElement("input")
        commentSubmitButton.value="Submit"
        commentSubmitButton.setAttribute("type","button");
        commentSubmitButton.setAttribute("onClick", "addComment("+ newsitem[i].id +")")
        addComment.appendChild(commentSubmitButton);

        //comment section toevoegen
        newsItemParagraph.appendChild(addComment)

        //newsitem toevoegen
        newsitemdiv.appendChild(newsItemParagraph);
    }
    setTimeout(getAllNewsItems, 1000);
}
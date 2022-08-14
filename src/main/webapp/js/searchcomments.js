window.onload = pollingProcess()
document.getElementById("searchbutton").onclick = setFilterValue

var filtervalue = "";

function pollingProcess(){
    axios.get('Controller?command=AllComments')
        .then(response => showComments(response.data))
        .then(() => setTimeout(pollingProcess,1000))
}

function showComments (comments){
    let commentsDiv = document.getElementById("comments")
    commentsDiv.innerHTML = ""
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].author.toLowerCase().includes(filtervalue.toLowerCase())){
            let commentParagraph = document.createElement("p");
            let commentdate = comments[i].date.dayOfMonth + "/" + comments[i].date.monthValue + "/" + comments[i].date.year
            let comment = comments[i].author + " @ " + commentdate + ": " + comments[i].content
            commentParagraph.innerHTML = comment;
            commentsDiv.appendChild(commentParagraph)
        }
    }
}

function setFilterValue(){
    let inputfield = document.getElementById("author");
    filtervalue = inputfield.value
}
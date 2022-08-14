<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Home</title>
    <link rel="stylesheet" href="css/style.css" type="text/css">
</head>
<body>

<nav class="navver">
    <h6>Polling</h6>
    <a href="index.jsp">Home</a>
    <a href="searchcomments.jsp"> search comments</a>
</nav>
<h1>NewsItems</h1>

<div id="newsItems">

</div>

<div class="formAndText">
    <div class="formtext">
        <h2>Add news item:</h2>
        <p>If you have any news you want to send out to our employees or students, be free to fill in our form at the right.</p>
    </div>
    <div class="form">
        <label for="newsItemTitle">Title:</label><br>
        <input type="text" id="newsItemTitle" onkeydown="validation()"><br>

        <label for="newsItemText">Text:</label><br>
        <textarea id="newsItemText" rows="4" onkeydown="validation()"></textarea><br>

        <label for="newsItemAuthor">Author:</label><br>
        <input for="author"  type="text" id="newsItemAuthor" onkeydown="validation()"><br>

        <input type="button" id="addNewsItemButton" value="Add News item" style="display:none">
        <h4 id="validationlabel" style="display: block; margin:0.5rem; margin-left: 0;">Fill in all fields to post a news item.</h4>
    </div>
</div>

<footer>
    <p>©Coeckelbergh Mats, Doggen Sander</p>
    <p>webontwikkeling 4 ~ klas 56 - groep 14</p>
</footer>
<script>
    /*
    VALIDATION
     */
    function validation(){
        setTimeout(delayedValidation, 100)
    }

    function delayedValidation(){
        if (document.getElementById('newsItemTitle').value.length !== 0 &&
            document.getElementById('newsItemText').value.length !== 0 &&
            document.getElementById('newsItemAuthor').value.length !== 0 ){
            document.getElementById('addNewsItemButton').style.display = 'block'
            document.getElementById('validationlabel').style.display = 'none'
        }
        else
        {
            document.getElementById('addNewsItemButton').style.display = 'none'
            document.getElementById('validationlabel').style.display = 'block'
        }
    }
</script>
</body>
<script type="text/javascript" src="js/newsitem.js"></script>
</html>
<!DOCTYPE html>
<html>
<head>
    <title>Search comments</title>
    <link rel="stylesheet" href="css/style.css" type="text/css">
</head>
<body>
<nav class="navver">
    <h6>Polling</h6>
    <a href="index.jsp">Home</a>
    <a href="searchcomments.jsp"> search comments</a>

</nav>

<label for="author">Naam:</label>
<input type="text" id="author" name="author" /> <br/>
<button type="button" id="searchbutton">Search</button>
<div id="comments"></div>
</body>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript" src="js/searchcomments.js"></script>
</html>


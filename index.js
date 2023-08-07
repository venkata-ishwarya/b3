<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body{
        display: flex;
        text-align: center;
        justify-content:center;
        margin-top: 150px;
    }
</style>
<body>
    <button>Click Me!</button>
</body>
<script>
    const button=document.querySelector("button");
    const body=document.querySelector("body");
    const color=['violet','indigo','blue','green','yellow','orange','red'];
    body.style.backgroundColor='pink';
    document.addEventListener('click',function(){
           const colorIndex=parseInt(Math.random()*color.length);
           body.style.backgroundColor=color[colorIndex];
    });




</script>
</html>
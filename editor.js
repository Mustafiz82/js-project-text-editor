const text = document.getElementById("text-area")




document.getElementById("bold").addEventListener("click", function(){
   
    if (text.style.fontWeight == "bold") {

        text.style.fontWeight = "normal"
    }
    else{
        text.style.fontWeight = "bold"
        
    }
})

document.getElementById("italic").addEventListener("click", function(){

    if (text.style.fontStyle == "italic") {

        text.style.fontStyle = "normal"
    }
    else{
        text.style.fontStyle = "italic"
        
    }
})

document.getElementById("underline").addEventListener("click", function(){
    if (text.style.textDecoration == "underline") {

        text.style.textDecoration = "none"
    }
    else{
        text.style.textDecoration = "underline"
        
    }

})

document.getElementById("align-left").addEventListener("click", function(){
    text.style.textAlign = "left"
})

document.getElementById("align-center").addEventListener("click", function(){
    text.style.textAlign = "center"
})

document.getElementById("align-right").addEventListener("click", function(){
    text.style.textAlign = "right"
})

document.getElementById("align-justify").addEventListener("click", function(){
    text.style.textAlign = "justify"
})

document.getElementById("font-size").addEventListener("input", function(){
    font = document.getElementById("font-size")
    text.style.fontSize = font.value + "px"
    
})

text.style.textTransform = "none"
document.getElementById("case").addEventListener("click", function(){

    if (text.style.textTransform == "none") {

        document.getElementById("case").innerText = "Aa"
        text.style.textTransform = "capitalize"
    }
    else if (text.style.textTransform == "capitalize"){
        
        document.getElementById("case").innerText = "aa"
        text.style.textTransform = "lowercase"
    }
    else if(text.style.textTransform == "lowercase") {
        document.getElementById("case").innerText = "AA"
        text.style.textTransform = "uppercase"
    }
    else{
        
        document.getElementById("case").innerText = "aA"
        text.style.textTransform = "none"
    }
   
})




document.getElementById("color").addEventListener("input", function(){
    color = document.getElementById("color").value
    text.style.color = color
    
})



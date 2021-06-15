function loader(){
    //virtual container to locally store my divs
    const container = document.createDocumentFragment();
 
    //getting the default value
    var x = document.getElementById("side").value;
    const cont = document.querySelector("#container");
    cont.style.gridTemplateColumns=`repeat(${x}, 1fr`;
    cont.style.gridTemplateRows=`repeat(${x}, 1fr`;
    
    //creating the (userInput) divs
    for(let i=0; i<x*x; i++){
        const divs = document.createElement('div');
        divs.classList.add('squares');
        divs.addEventListener('mouseover', colorChange);
        divs.addEventListener('click', eraser);
        container.appendChild(divs);
    }

    cont.replaceChildren(container);    

    document.querySelector("#input").addEventListener('click', selectSquares);

    //changing color when mouse hovers
    function colorChange(e){
        e.target.style.backgroundColor = '#3b7a7a';
    }
    //set color to white again
    function selectSquares(){
       document.querySelectorAll('.squares').forEach(resetColor);
       
    }
    function resetColor(element){
        element.style.backgroundColor = '#FFFFFF';
    }
    //set the square when clicked to white
    function eraser(e){
        e.target.style.backgroundColor='#FFFFFF';
    }

}




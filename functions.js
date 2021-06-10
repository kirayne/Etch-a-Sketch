function loader(){
    //virtual container to locally store my divs
    const container = document.createDocumentFragment();

    //creating the 256 divs
    for(let i=0; i<256; i++){
        const divs = document.createElement('div');
        divs.classList.add('squares');
        divs.addEventListener('mouseover', colorChange);
        divs.addEventListener('click', eraser);
        container.appendChild(divs);
    }
    document.querySelector("#container").appendChild(container);

    document.querySelector("#input").addEventListener('click', selectSquares);

    //changing color when mouse hovers
    function colorChange(e){
        e.target.style.backgroundColor = '#586466';
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


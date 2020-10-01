const colors = [
    {
      name: "red",
      motto: "Rose Red",
    },
    {
      name: "blue",
      motto: "Ocean Blue",
    },
    {
      name: "gray",
      motto: "Smoke Gray",
    },
    {
      name: "purple",
      motto: "Deep Purple",
    },
  ];
  


const randomColorButtonElement = document.querySelector('#randomColorButton');
const setColorButtonElement = document.querySelector('#setColorButton');


function changeColor(colorData){
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomColorObject = colors[randomIndex];
    
    document.querySelector('body').style.backgroundColor = randomColorObject.name
    document.querySelector('#colorName').innerText = randomColorObject.name
    
}

function setColor(){
    
    const userInput = document.querySelector('.colorInput').value
    const userInputData = userInput.split(':')
    
    const userInputObject = {
        name : userInputData[0],
        motto:userInputData[1],
    };

    document.querySelector('#colorDesc').innerText = userInputObject.motto
    document.querySelector('#colorName').innerText = userInputObject.name

    document.querySelector('body').style.backgroundColor = userInputObject.name
    
    const colorIndex = colors.findIndex((color) => color.name==userInputObject.name)
    console.log("setColor -> colorIndex", colorIndex);

    if(colorIndex == -1){
      colors.push(userInputObject)
      console.log(colors)
    }else{
      alert('color  exist')
    }

}
    


console.log("setColor -> colors", colors)

randomColorButtonElement.addEventListener('click',() =>{
    changeColor()
})
setColorButtonElement.addEventListener('click', () =>{
    setColor()
    
});




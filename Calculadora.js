const variableDisplay = document.getElementById("display");
const btn = document.querySelectorAll(".btn");
btn.forEach((botones) => {
  botones.addEventListener("click", function () {
    const botonApretado = botones.textContent;

    if (botones.id === "CE") {
      variableDisplay.textContent = "0";
      return;
    }

    if (botones.id === "C") {
      if (variableDisplay.textContent.length === 1) {
        variableDisplay.textContent = "0";
        return;
      } else {
        variableDisplay.textContent = variableDisplay.textContent.slice(0, -1);
        return;
      }
    } //Cierre de llaves de botones.id === 'C'

    if (botones.id === "igual") {
      variableDisplay.textContent = eval(variableDisplay.textContent);

      if (variableDisplay.innerText.includes(".")) {
        variableDisplay.textContent = variableDisplay.textContent.replace(".", ",");
      };
      return;
    };
    if (variableDisplay.textContent === "0") {

        if(botones.id === 'cero'){
          variableDisplay.textContent += botonApretado;
        }else if(botones.id === 'punto'){
          variableDisplay.textContent += botonApretado;
        }else{
          variableDisplay.textContent = botonApretado;
        }

    }else {
      variableDisplay.textContent += botonApretado;
    };

    if (variableDisplay.textContent.includes("++")) {
      variableDisplay.textContent = variableDisplay.textContent.replace("++","+");
      return;
    } else if (variableDisplay.textContent.includes("--")) {
      variableDisplay.textContent = variableDisplay.textContent.replace("--", "-");
      return;
    } else if (variableDisplay.textContent.includes("//")) {
      variableDisplay.textContent = variableDisplay.textContent.replace("//","/"
      );
      return;
    } else if (variableDisplay.textContent.includes("**")) {
      variableDisplay.textContent = variableDisplay.textContent.replace("**", "*");
      return;
    }else if (variableDisplay.textContent.includes("..")) {
      variableDisplay.textContent = variableDisplay.textContent.replace("..", "."
      );
      return;
    };
    
  }); //Cierre de llave de addEVentListener
}); //Cierre de llave de for each

/*Commit 4/5/2024:
Se soluciono el problema de los operadores repetidos (++,--,//,**, ..)
 */

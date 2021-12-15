export const initialState = {
  input: "INPUT",
  output: "OUTPUT",
}

export const reducer = (state,action) => {
  switch (action.type) {
    case CLICK:
      const newState = JSON.parse(JSON.stringify(state));

        if (action.id === "operator") {
          switch(action.value) {
            case "AC":
              newState.input = "";
              newState.output = "";
              break;

            case "subtract": {
              let length = state.output.length;
              if (length === 0){
                newState.input = SUBTRACT;
                newState.output = state.output.concat(SUBTRACT);
              } else if (length === 1){
                if(state.output.match(/[+*/]/)){
                  newState.input = SUBTRACT;
                  newState.output = SUBTRACT;
                } else if(newState.output === SUBTRACT) {
                  // do nothing
                } else if (!isNaN(state.output)) {
                  newState.input = SUBTRACT;
                  newState.output = state.output.concat(SUBTRACT);
                }
              }
              else if (length > 1) {
                if(!isNaN(parseFloat(state.output[length-2]))
                    && state.output[length-1].match(/[+*/-]/)){
                      newState.input = SUBTRACT;
                      newState.output = state.output.concat(SUBTRACT);
                }
                else if (state.output[length-2].match(/[+*/-]/)
                    && !isNaN(parseFloat(state.output[length-1]))) {
                      newState.input = SUBTRACT;
                      newState.output = state.output.concat(SUBTRACT);
                }
                else if (state.output[length-2].match(/[+*/-]/)
                    && state.output[length-1] === SUBTRACT) {
                      // do nothing
                }
                else if (!isNaN(parseFloat(state.output[length-2]))
                    && !isNaN(parseFloat(state.output[length-1]))) {
                      newState.input = SUBTRACT;
                      newState.output = state.output.concat(SUBTRACT);
                }
                else if (state.output[length-2] ==="."
                    && state.output[length-1].match(/[+*/-]/)) {
                      newState.input = SUBTRACT;
                      newState.output = state.output.slice(0, state.output.length-1).concat(SUBTRACT);
                }
                else if (!isNaN(parseFloat(state.output[length-2]))
                    && state.output[length-1] === ".") {
                      newState.input = SUBTRACT;
                      newState.output = state.output.concat(SUBTRACT);
                }
                else if ( state.output[length-2] === "."
                    && !isNaN(parseFloat(state.output[length-1]))) {
                      newState.input = SUBTRACT;
                      newState.output = state.output.concat(SUBTRACT);
                }
              }
              break;
            }
            case "add": {
              let length = state.output.length;
              if (length === 0){
                newState.input = ADD;
                newState.output = state.output.concat(ADD);
              } else if (length === 1){
                if(state.output.match(/[*/-]/)){
                  newState.input = ADD;
                  newState.output = ADD;
                } else if(newState.output === ADD) {
                  // do nothing
                } else if (!isNaN(state.output)) {
                  newState.input = ADD;
                  newState.output = state.output.concat(ADD);
                }
              }
              else if (length > 1) {
                if(!isNaN(parseFloat(state.output[length-2]))
                    && state.output[length-1].match(/[+*/-]/)){
                      newState.input = ADD;
                      newState.output = state.output.slice(0,length-1).concat(ADD);
                }
                else if (state.output[length-2].match(/[+*/-]/)
                    && !isNaN(parseFloat(state.output[length-1]))) {
                      newState.input = ADD;
                      newState.output = state.output.concat(ADD);
                }
                else if (!isNaN(parseFloat(state.output[length-2]))
                    && !isNaN(parseFloat(state.output[length-1]))) {
                      newState.input = ADD;
                      newState.output = state.output.concat(ADD);
                }
                else if (state.output[length-2].match(/[+*/-]/)
                    && state.output[length-1] === SUBTRACT){
                      newState.input = ADD;
                      newState.output = state.output.slice(0, state.output.length-2).concat(ADD);
                }
                else if (state.output[length-2] ==="."
                    && state.output[length-1].match(/[+*/-]/)) {
                      newState.input = ADD;
                      newState.output = state.output.slice(0, state.output.length-1).concat(ADD);
                }
                else if (!isNaN(parseFloat(state.output[length-2]))
                    && state.output[length-1] === ".") {
                      newState.input = ADD;
                      newState.output = state.output.concat(ADD);
                }
                else if ( state.output[length-2] === "."
                    && !isNaN(parseFloat(state.output[length-1]))) {
                      newState.input = ADD;
                      newState.output = state.output.concat(ADD);
                }
              }
              break;
            }

            case "multiply":
              let length = state.output.length;
              if (length === 0){
                newState.input = MULTIPLY;
                newState.output = state.output.concat(MULTIPLY);
              }
              else if (length === 1){
                if(state.output.match(/[+/-]/)){
                  newState.input = MULTIPLY;
                  newState.output = MULTIPLY;
                } else if(newState.output === MULTIPLY) {
                  // do nothing
                } else if (!isNaN(state.output)) {
                  newState.input = MULTIPLY;
                  newState.output = state.output.concat(MULTIPLY);
                }
              }
              else if (length > 1) {
                if(!isNaN(parseFloat(state.output[length-2]))
              && state.output[length-1].match(/[+*/-]/)){
                      newState.input = MULTIPLY;
                      newState.output = state.output.slice(0,length-1).concat(MULTIPLY);
                }
                else if (state.output[length-2].match(/[+*/-]/)
                      && !isNaN(parseFloat(state.output[length-1]))) {
                        newState.input = MULTIPLY;
                        newState.output = state.output.concat(MULTIPLY);
                }
                else if (!isNaN(parseFloat(state.output[length-2]))
                    && !isNaN(parseFloat(state.output[length-1]))) {
                      newState.input = MULTIPLY;
                      newState.output = state.output.concat(MULTIPLY);
                }
                else if (state.output[length-2].match(/[+*/-]/)
                    && state.output[length-1] === SUBTRACT){
                      newState.input = MULTIPLY;
                      newState.output = state.output.slice(0, state.output.length-2).concat(MULTIPLY);
                }
                else if (state.output[length-2] ==="."
                    && state.output[length-1].match(/[+*/-]/)) {
                      newState.input = MULTIPLY;
                      newState.output = state.output.slice(0, state.output.length-1).concat(MULTIPLY);
                }
                else if (!isNaN(parseFloat(state.output[length-2]))
                    && state.output[length-1] === ".") {
                      newState.input = MULTIPLY;
                      newState.output = state.output.concat(MULTIPLY);
                }
                else if ( state.output[length-2] === "."
                    && !isNaN(parseFloat(state.output[length-1]))) {
                      newState.input = MULTIPLY;
                      newState.output = state.output.concat(MULTIPLY);
                }
              }
              break;

            case "divide":{
              let length = state.output.length;
              if (length === 0){
                newState.input = DIVIDE;
                newState.output = state.output.concat(DIVIDE);
              }
              else if (length === 1){
                if(state.output.match(/[+*-]/)){
                  newState.input = DIVIDE;
                  newState.output = DIVIDE;
                } else if(newState.output === DIVIDE) {
                  // do nothing
                } else if (!isNaN(state.output)) {
                  newState.input = DIVIDE;
                  newState.output = state.output.concat(DIVIDE);
                }
              }
              else if (length > 1) {
                if(!isNaN(parseFloat(state.output[length-2]))
              && state.output[length-1].match(/[+*/-]/)){
                      newState.input = DIVIDE;
                      newState.output = state.output.slice(0,length-1).concat(DIVIDE);
                }
                else if (state.output[length-2].match(/[+*/-]/)
                      && !isNaN(parseFloat(state.output[length-1]))) {
                        newState.input = DIVIDE;
                        newState.output = state.output.concat(DIVIDE);
                }
                else if (!isNaN(parseFloat(state.output[length-2]))
                    && !isNaN(parseFloat(state.output[length-1]))) {
                      newState.input = DIVIDE;
                      newState.output = state.output.concat(DIVIDE);
                }
                else if (state.output[length-2].match(/[+*/-]/)
                    && state.output[length-1] === SUBTRACT){
                      newState.input = DIVIDE;
                      newState.output = state.output.slice(0, state.output.length-2).concat(DIVIDE);
                }
                else if (state.output[length-2] ==="."
                    && state.output[length-1].match(/[+*/-]/)) {
                      newState.input = DIVIDE;
                      newState.output = state.output.slice(0, state.output.length-1).concat(DIVIDE);
                }
                else if (!isNaN(parseFloat(state.output[length-2]))
                    && state.output[length-1] === ".") {
                      newState.input = DIVIDE;
                      newState.output = state.output.concat(DIVIDE);
                }
                else if ( state.output[length-2] === "."
                    && !isNaN(parseFloat(state.output[length-1]))) {
                      newState.input = DIVIDE;
                      newState.output = state.output.concat(DIVIDE);
                }
              }
              break;
            }

            case ".": {
              let length = state.output.length;
              if(length === 0){
                newState.input = "0.";
                newState.output = state.output.concat("0.");
              }
              else if(length === 1){
                if(!isNaN(parseFloat(state.output))){
                  newState.input = state.input.concat(".");
                  newState.output = state.output.concat(".");
                }
                else if (state.output.match(/[+*/-]/)){
                  newState.input = "0.";
                  newState.output = state.output.concat("0.");
                }
              }
              else if (length > 1){
                if (!isNaN(parseFloat(state.output[length-2]))
                    && state.output[length-1] === "."){
                      // do nothing
                }
                else if (!isNaN(parseFloat(state.output[length-2]))
                    && state.output[length-1].match(/[+*/-]/)){
                      newState.input = "0.";
                      newState.output = state.output.concat("0.");
                }
                else if (state.output[length - 2].match(/[+*/-]/
                    && state.output[length - 1] === "-")) {
                      newState.input = "0.";
                      newState.output = state.output.concat("0.");

                }
                else if (!isNaN(parseFloat(state.output[length-2]))
                    && !isNaN(parseFloat(state.output[length-1]))) {
                      console.log("ok1");
                      if (state.output.match(/[.]\d+$/)){
                        // do nothing
                      } else {
                        newState.input = state.input.concat(".");
                        newState.output = state.output.concat(".");
                      }
                }
                else if (state.output[length-2] === "."
                    && !isNaN(parseFloat(state.output[length-1]))){
                      // do nothing
                }
                else if (state.output[length-2].match(/[+*/-]/)
                    && !isNaN(parseFloat(state.output[length-1]))) {
                      newState.input = state.input.concat(".");
                      newState.output = state.output.concat(".");
                }
                // ???
                else if (state.output.match(/\d+[+*/-].$/)){
                  newState.input = "0.";
                  newState.output = state.output.concat("0.");
                }
              }
              break;
            }
            case "equal": {
            if (newState.output.match(/^[*+/]\d+$|=|^[*/]\d+[.]\d*$/)) {

              } else {
                const Arr = handleOutput(state.output);
                newState.input = Arr[0];
                newState.output = Arr[1];
              }
              break;
            }
            default:
              break;
            }

        }
        else if (action.id === "number") {
          //let length = newState.output.length;
          if(state.input === ""){
            newState.input = action.value;
          } else if (state.input.match(/[+*/-]/)) {
            newState.input = action.value;
          } else if (!isNaN(parseFloat(newState.input))) {
            newState.input = state.input.concat(action.value);
          }
          newState.output = state.output.concat(action.value);
        }
        return newState;
      default:
        throw new Error("action type: " + action.type);
  }
}

export const CLICK = "CLICK";

// const buttonValues = ["0","1", "2", "3", "4", "5", "6","7", "8", "9"]

const ADD = "+";
const SUBTRACT = "-";
const MULTIPLY = "*";
const DIVIDE = "/";

const handleOutput = (str) => {
  let output = "";
  let input = "";
  let newStr = str.slice();
  // "" => NAN, +*/- => NAN
  if(newStr === "" || newStr.match(/^[+*/-]$/)) {
    output = "NaN";
    input = "NaN";
    console.log(1);
  }
  // 88 => 88
  else if (newStr.match(/^\d+$/)){
    output = newStr.concat("=").concat(newStr);
    input = newStr;
    console.log(2);
  }
  // 7+ 7- 7* 7/ => 7
  else if (newStr.match(/^\d+[+*/-]+$/)) {
    newStr = newStr.replace(/[+*/-]/g,"");
    output = newStr.concat("=").concat(newStr);
    input = newStr;
    console.log(3);
  }
  else if(newStr.match(/^[-]*\d+[.]\d*$/)){
    // 20.  => 20
    if(newStr.match(/^\d+.$/)) {
      newStr = newStr.replace(".","");
      output = newStr.concat("=").concat(newStr);
      input = newStr;
      console.log(4);
    // 20.5   => 20.5
    } else if(newStr.match(/^\d+[.]\d+$/)){
      output = newStr.concat("=").concat(newStr);
      input = newStr;
      console.log(5);
    // -20.     => -20
    } else if (newStr.match(/^-\d+.$/)) {
      newStr = newStr.replace(".","");
      output = newStr.concat("=").concat(newStr);
      input = newStr;
      console.log(6);
    // -20.5    => -20.5
    } else if (newStr.match(/^-\d+[.]\d+$/)){
      output = newStr.concat("=").concat(newStr);
      input = newStr;
      console.log(7);
    }
  }
  // -7 => -7
  else if (newStr.match(/^-\d+$/)){
    output = newStr.concat("=").concat(newStr);
    input = newStr;
    console.log(8);
  }
  // +7. => 7
  else if(newStr.match(/^[+]\d+[.]$/)){
    newStr = newStr.replace(/[+.]/g,"");
    output = newStr.concat("=").concat(newStr);
    input = newStr;
    console.log(9);
  }
  else {
    console.log(10);
    newStr = newStr.replace(/--/g,"+").split(/(\d+[.]\d*)|(\d+)/g);
    newStr = newStr.filter((elem) => {
      if(elem === '' || elem === undefined){
        return false;
      }
      return true;
    });

    for (let i = 0 ;i < newStr.length ;i++){
      if(newStr[i] === "*" || newStr[i] ==="/") {
        if (newStr[i] === "*"){
          newStr[i] = parseFloat(newStr[i-1]) * parseFloat(newStr[i+1]);
        } else if (newStr[i] === "/") {
          newStr[i] = parseFloat(newStr[i-1]) / parseFloat(newStr[i+1]);
        }
        newStr[i-1] = "";
        newStr[i+1] = "";
        i-=1;

        // phải để ở bên trong, vì nếu 0 i-=1 => infinite loop
      } else if (newStr[i] === "*-" || newStr[i] === "/-"){
          // 10*-2 = -20
          if (newStr[i] === "*-"){
            newStr[i] = parseFloat(newStr[i-1]) * parseFloat(newStr[i+1])*(-1);
          }
          // 10/-5 = -2
          else if (newStr[i] === "/-") {
            newStr[i] = parseFloat(newStr[i-1]) / parseFloat(newStr[i+1])*(-1);
          }
          newStr[i-1] = "";
          newStr[i+1] = "";
          i-=1;
      }
      newStr = newStr.filter((elem) => {
        if(elem === '' || elem === undefined){
          return false;
        }
        return true;
      })
    }

    // can't be in the same for loop, it will violate the operator precedence rule
    for (let i = 0 ;i < newStr.length ;i++){
      if(newStr[i] === "+" || newStr[i] ==="-") {
        if (newStr[i] === "+"){
          newStr[i] = parseFloat(newStr[i-1]) + parseFloat(newStr[i+1]);
          newStr[i-1] = "";
          newStr[i+1] = "";
          i-=1;
        }
        else if (newStr[i] === "-") {
          if (i === 0){
            newStr[i+1] = newStr[i] + newStr[i+1];
            newStr[i] = "";
            i-=1;
          }
          else if (i !== 0){
            newStr[i] = parseFloat(newStr[i-1]) - parseFloat(newStr[i+1]);
            newStr[i-1] = "";
            newStr[i+1] = "";
            i-=1;
          }
        }
      }
      // 7+-5 = 2
      else if (newStr[i] === "+-") {
        console.log("ok");
        newStr[i] = parseFloat(newStr[i-1]) - parseFloat(newStr[i+1]);
        newStr[i-1] = "";
        newStr[i+1] = "";
        i-=1;
      }
      newStr = newStr.filter((elem) => {
        if(elem === '' || elem === undefined){
          return false;
        }
        return true;
      })
    }
    newStr= newStr.join("");
    // 7 - 0. => 7. => trim "."
    // if(newStr.match(/\d+[.]$/)){
    //   newStr = newStr.replace(".","");
    // }
    output = newStr;
    input = newStr;
  }
  return [input, output];
}
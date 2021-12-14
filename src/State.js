
export const initialState = {
    input: "INPUT",
    output: "OUTPUT",
    array: []
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
                        newState.array = [];
                        break;

                    case "subtract":
                        // cant push because arrays are recreated when pushing,wtf
                        // newState.array = state.array.push("-"); => sai
                        let length = newState.array.length;
                        // input = "-", nothing comes before
                        if(state.input === "") {
                            newState.array.push("-");
                            newState.input = "-";
                            newState.output = state.output.concat("-");
                        } else if(state.input === "-") {
                            // input = "-", before = "-", arr length is 1 => --
                            if(length === 1) {

                            }
                            // arr length >=2, *--, /--, +--, --- => sai
                            else if(state.array.length >=2 &&
                            state.array[length-2].match(/[*/+-]/)) {

                            // arr length >=2, 9--
                            } else if(state.array.length >=2 &&
                            !state.array[length-2].match(/[*/+-]/)) {
                                newState.array.push("-");
                                newState.input = "-";
                                newState.output = state.output.concat("-");
                            }
                        } else if(state.input !== "-") {
                            newState.array.push("-");
                            newState.input = "-";
                            newState.output = state.output.concat("-");
                        }
                        break;

                    default:
                        break;
                }
            } else if (action.id === "number") {
                let length = newState.array.length;
                // in put a number, before is a "-"
                if (state.input === "-") {
                    // input a number, before it is "-" and before that is "*/+"
                    if(state.array.length >=2 && state.array[length-2].match(/[+*/]/)) {
                        newState.array[length-1] = newState.array[length-1].concat(action.value);
                    // input a number, before it is "-" and before that is "-"
                    } else if(state.array.length >=2 && state.array[length-2] === "-"){
                        newState.array[length-2] = "+";
                        newState.array[length-1] = action.value;
                    // input a number, before it is "-" and before that is "*/+"
                    } else if (state.array.length >=2 && !isNaN(parseFloat(newState.array[length-2]))) {
                        newState.array = newState.array.concat(action.value);
                    } else if (state.array.length === 1) {
                        newState.array.push(action.value);
                    }
                    newState.input = action.value;
                    newState.output = state.output.concat(action.value);
                }
                // in put a number, before is a number
                else if (!isNaN(parseFloat(newState.array[length-1]))){
                    newState.array[length-1] = newState.array[length-1].concat(action.value);
                    newState.input = newState.array[length-1];
                    newState.output = state.output.concat(action.value);
                // first render, when input is empty
                } else if (state.input === ""){
                    newState.array = newState.array.concat(action.value);
                    newState.input = action.value;
                    newState.output = state.output.concat(action.value);
                }
            }
            console.log(newState.array);
            return newState;
        default:
            throw new Error("action type: " + action.type);
    }
}

export const CLICK = "CLICK";

const buttonValues = ["0","1", "2", "3", "4", "5", "6","7", "8", "9"]


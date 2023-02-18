
var variables = {};
var getVariable = function (name) {
    console.log("Get", name, variables[name])
    return variables[name];
}

var setVariable = function (name, value) {
    console.log("Set", name, value)
    variables[name] = value;
}

var simulateAction = function (name) {
    switch (name) {
        case 'setA':
            variables["a"] = "x";
            break;
        case 'processItem':
            let item = variables.get('items')[0];
            item.state = 'processed';
            variable['items'] = [item, variables['items'].shift()]
    }
}
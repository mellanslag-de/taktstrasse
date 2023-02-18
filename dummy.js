
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
        case 'setPointsCount':
            variables["pointsCount"] = 4;
            break;
        case 'increasePointsCount':
            variables["pointsCount"] += 1;
            break;
        case 'processItem':
            let item = variables.get('items')[0];
            item.state = 'processed';
            variable['items'] = [item, variables['items'].shift()]
    }
}
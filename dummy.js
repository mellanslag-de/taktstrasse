
var variables = {};
var getVariable = function (name) {
    let currentValue = variables[name];
    console.log("Get", name, currentValue)
    return currentValue;
}

var setVariable = function (name, value) {
    console.log("Set", name, value)
    variables[name] = value;
}

var updateVariable = function (name, fn) {
    let oldValue = getVariable(name);
    let newValue = fn(oldValue);
    setVariable(name, newValue);
}

var subscribeVariable = function (name, fn) {
    let previousValue = getVariable(name);
    fn(previousValue);

    setInterval(() => {
        let newValue = getVariable(name);
        if (newValue !== previousValue) {
            previousValue = newValue;
            fn(newValue);
        }
    }, 100);
}

var simulateAction = function (name) {
    switch (name) {
        case 'init':
            variables["pointsCount"] = 4;
            break;
        case 'errorHappened':
            variables["pointsCount"] = 0;
            break;
    }
}
module.exports = function check(str, bracketsConfig) {
    let bracketer = {};
    bracketsConfig.forEach((item) => {
        bracketer[item[1]] = item[0];
    });
    let stack = [];
    for (let i = 0; i < str.length - 1; i++) {
        if (
            Object.keys(bracketer).includes(str[i]) &&
            str[i] == bracketer[str[i]]
        ) {
            if (stack[stack.length - 1] == str[i]) {
                stack.pop();
            } else if (stack[stack.length - 1] != str[i] || !stack.length) {
                stack.push(str[i]);
            }
            continue;
        }
        if (!Object.keys(bracketer).includes(str[i])) {
            stack.push(str[i]);
        } else if (
            Object.keys(bracketer).includes(str[i]) &&
            (!stack.length || stack[stack.length - 1] != bracketer[str[i]])
        ) {
            return false;
        } else if (
            Object.keys(bracketer).includes(str[i]) &&
            stack[stack.length - 1] == bracketer[str[i]]
        ) {
            stack.pop();
            continue;
        } else if (!Object.keys(bracketer).includes(str[i])) {
            stack.push(str[i]);
        }
    } console.log(stack)
    if (stack[0] == undefined || stack.length == 3) {
        return false;
    }
   
    return true;
};

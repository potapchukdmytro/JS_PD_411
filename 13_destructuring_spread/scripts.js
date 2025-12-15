function First() {
    // Spread та destructuring
    const arr1 = [1, 555, 4, 67, 32, 35, 57, 83, 69, 9];
    const arr2 = [...arr1];

    arr1[0] = 999;

    console.log(arr1);
    console.log(arr2);

    const obj1 = { type: "default", value: 1 };
    const obj2 = { ...obj1 };

    const { value, type } = obj1;
    console.log(value);
    console.log(type);

    // const arr1 = [1,555,4,67,32,35,57,83,69,9];
    const [first, second] = arr1;
    console.log(first);
    console.log(second);

    const state = [5, () => {}];
    const [number, setNumber] = state;

    // const inputName = document.getElementById("name");
    // const {value, name} = inputName;
    // console.log(inputValue);
    // console.log(name);

    const tag = {
        name: "div",
        width: "100px",
        height: "50px",
        color: "black",
        id: "box",
    };

    function boxArea({ width, height }) {
        if (!width || !height) {
            return 0;
        }

        const wInt = parseInt(width.split("px")[0]);
        const hInt = parseInt(height.split("px")[0]);
        return wInt * hInt;
    }

    console.log(boxArea(tag));
}

function Second() {
    const myValue = {
        id: 1,
        value: 50,
        type: "int",
    };

    const newValue = { ...myValue, date: new Date() };
    console.log(newValue);

    const result = { ...newValue, id: 2 };
    console.log(result);

    const user = {
        firstName: "Mike",
        lastName: "Thomson",
    };

    const cred = {
        login: "mike",
        password: "qwerty",
    };

    const mike = { ...user, ...cred };
    console.log(mike);

    function sum(...values) {
        let res = 0;
        for (const item of values) {
            res += item;
        }
        return res;
    }

    const sumRes = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    console.log(sumRes);

    const numbers = [1, 2, 3, 4, 5, 6];
    const newNumbers = [...numbers, 7, 8, 9, 10];
    console.log(newNumbers);

    let personalData = {
        email: "user@mail.com",
        firstName: "Mike",
        lastName: "Thomson",
        age: 50,
        address: "Soborna str",
    };

    personalData = { ...personalData, email: "newemail@mail.com", age: 40 };
}


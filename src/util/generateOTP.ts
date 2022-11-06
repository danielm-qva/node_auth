export const randoOtp = (a: number) => {
    const arraysNumber = new Array();

    for (let i = 0; i < a; i++) {
        arraysNumber[i] = randon();
    }
    const valorFinal = randon(1, a);
    return arraysNumber[valorFinal];
}

const randon = (min: number = 10001, max: number = 999999) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


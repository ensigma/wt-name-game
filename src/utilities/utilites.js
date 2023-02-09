export const getSingleRandom = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
};

export const getMultipleRandom = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
};
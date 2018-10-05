let str = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y' ,'z'
]

const globalFn = {
    getRandom: (len = 10) => {
        let str = '';
        while(len--) {
            Math.floor(Math.random() * (str.length + 1));
        };
        return str
    }
}



export default globalFn
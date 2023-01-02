var num;

function par(num) {
    if (num == 0) {
        return 'Par';
    } else if (num == 1) {
        return 'Impar';
    } else {
        return par(num%2);
    }
};
'use strict';

function dec2bin(a){
    /**
     * Return the binary representation of a non-negative decimal number
     * 
     * @param a Decimal number to be converted
     * 
     * @returns Binary representation of said number
     */

    return (a === 0) ? 0 : (a % 2 + 10 * dec2bin(Math.floor(a / 2)));
}

function padding(a, b){
    /**
     * Pads a positive binary number based on how many bits are passed to it
     * 
     * @param a Decimal number to be padded
     * @param b Number of bits
     * 
     * @returns The padded string
     */

    if ((a >= 0) && (b > 0)){
        let r = dec2bin(a).toString();
    
        if ((b >= 0) && (r.length <= b)){
            let dif = b - r.length;
            let aux = '';

            while (aux.length < dif){
                aux += '0';
            }

            return aux + r;
        }
        else{
            console.log(`Out of interval. min = 0, max = ${Math.pow(2, b) - 1}`);
        }
    }
    else{
        console.log('Incorrect arguments.');
    }
}

# binaryPadding
Two simple JS functions, one for converting non-negative decimals to binary and one for padding said numbers with how many bits you want to.

# usage
To simply convert a non-negative decimal number, use `dec2bin(number)`.

Example: 
`dec2bin(10); //1010`

To pad a number (add zeroes to fit a determined size), use `padding(number, numberOfBits)`

Example:
`padding(128, 10); //"0010000000"`

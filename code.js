function ledOn(){
    UART.write("LED3.set();\n");
}

function ledOff(){
    UART.write("LED3.reset();\n");
}

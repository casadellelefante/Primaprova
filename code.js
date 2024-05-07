function ledOn(){
    UART.write("LED1.set();\n");
}

function ledOff(){
    UART.write("LED1.reset();\n");
}

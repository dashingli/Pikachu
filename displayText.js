const string = "pikachu *{\n" +
    "    margin:0;\n" +
    "    padding:0;\n" +
    "    box-sizing:border-box;\n" +
    "}\n" +
    "pikachu *::after,pikachu *::before{\n" +
    "    margin:0;\n" +
    "    padding:0;\n" +
    "    box-sizing:border-box;\n" +
    "}\n" +
    "\n" +
    "body{\n" +
    "margin: 0\n"+
    "    min-height: 100vh;\n" +
    "    background-color: #ffe600;\n" +
    "    display: flex;\n" +
    "    align-items: center;\n" +
    "    justify-content: center;\n" +
    "}\n" +
    ".pikachu{\n" +
    "    /* border:1px solid red; */\n" +
    "}\n" +
    ".nose{\n" +
    "    position: absolute;\n" +
    "    height: 0;\n" +
    "    width: 0;\n" +
    "    left : 50%;\n" +
    "    top:20%;\n" +
    "    transform: translateX(-11px);\n" +
    "    border: 11px solid;\n" +
    "    border-color: #000001 transparent transparent transparent;\n" +
    "}\n" +
    ".nose::before{\n" +
    "    content: \"\";\n" +
    "    display: block;\n" +
    "    position: relative;\n" +
    "    width:22px;\n" +
    "    height:5px;\n" +
    "    top:-16px;\n" +
    "    left:-11px;\n" +
    "    border-radius: 5px 5px 0 0;\n" +
    "    background-color: #000001;\n" +
    "}\n" +
    ".eye-right{\n" +
    "    position: absolute;\n" +
    "    top:-50px;\n" +
    "    right: 95px;\n" +
    "    background-color: #2d2e2e;\n" +
    "    border:3px solid #000000;\n" +
    "    width: 63px;\n" +
    "    height: 63px;\n" +
    "    border-radius: 50%;\n" +
    "}\n" +
    ".eye-left::before,.eye-right::before{\n" +
    "    content: \"\";\n" +
    "    display: block;\n" +
    "    position: relative;\n" +
    "    border:2px solid #000000;\n" +
    "    background-color: #ffffff;\n" +
    "    width: 31px;\n" +
    "    height: 31px;\n" +
    "    border-radius: 50%;\n" +
    "    left:5px;\n" +
    "}\n" +
    ".eye-left{\n" +
    "    background-color: #2d2e2e;\n" +
    "    position: absolute;\n" +
    "    top:-50px;\n" +
    "    left: 95px;\n" +
    "    content: \"\";\n" +
    "    display: block;\n" +
    "    border:3px solid #000000;\n" +
    "    width: 63px;\n" +
    "    height: 63px;\n" +
    "    border-radius: 50%;\n" +
    "}\n" +
    ".right-face{\n" +
    "    position: absolute;\n" +
    "    width: 88px;\n" +
    "    height: 88px;\n" +
    "    left:130px;\n" +
    "    top:60px;\n" +
    "    border-radius: 50%;\n" +
    "    border:2px solid #000001;\n" +
    "    background-color: #ff0000;\n" +
    "}\n" +
    ".left-face{\n" +
    "    background-color: #ff0000;\n" +
    "    position: absolute;\n" +
    "    width: 88px;\n" +
    "    height: 88px;\n" +
    "    right: 120px;\n" +
    "    top:60px;\n" +
    "    border-radius: 50%;\n" +
    "    border:2px solid #000001;\n" +
    "}\n" +
    ".mouth{\n" +
    "    overflow: hidden;\n" +
    "    position:relative;\n" +
    "    width: 200px;\n" +
    "    height: 200px;\n" +
    "    transform: translateX(-100px);\n" +
    "}\n" +
    ".beard-left{\n" +
    "    z-index: 2;\n" +
    "    position: absolute;\n" +
    "    border:3px solid #000000;\n" +
    "    width: 100px;\n" +
    "    height: 20px;\n" +
    "    left:3px;\n" +
    "    border-radius: 10px;\n" +
    "    border-top-color: transparent;\n" +
    "    border-right-color: transparent;\n" +
    "    background-color: #ffe600;\n" +
    "    transform: rotate(-15deg);\n" +
    "}\n" +
    ".beard-left::before{\n" +
    "    content: \"\";\n" +
    "    position: absolute;\n" +
    "    display: block;\n" +
    "    width: 100px;\n" +
    "    height: 20px;\n" +
    "    top:-2px;\n" +
    "    transform: rotate(-15deg);\n" +
    "    top:-20px;\n" +
    "    background-color: #ffe600;\n" +
    "}\n" +
    ".beard-right::before{\n" +
    "    content: \"\";\n" +
    "    display: block;\n" +
    "    position: absolute;\n" +
    "    display: block;\n" +
    "    width: 100px;\n" +
    "    height: 20px;\n" +
    "    top:-20px;\n" +
    "    background-color: #ffe600;\n" +
    "}\n" +
    "\n" +
    ".beard-right{\n" +
    "    z-index: 10;\n" +
    "    position:absolute;\n" +
    "    right: 3px;\n" +
    "    border-radius: 10px;\n" +
    "    border:3px solid #000000;\n" +
    "    background-color: #ffe600;\n" +
    "    width: 100px;\n" +
    "    height: 20px;\n" +
    "    border-radius: 10px;\n" +
    "    border-top-color: transparent;\n" +
    "    border-left-color: transparent;\n" +
    "    transform: rotate(15deg);\n" +
    "}\n" +
    ".flews{\n" +
    "    width: 200px;\n" +
    "    height:1000px;\n" +
    "    position: absolute;\n" +
    "    border:3px solid #000000;\n" +
    "    bottom:30px;\n" +
    "    background-color: #9b000b;\n" +
    "    border-radius: 500px / 2000px;\n" +
    "    overflow: hidden;\n" +
    "}\n" +
    ".yuan{\n" +
    "    width: 200px;\n" +
    "    height:125px;\n" +
    "    border:1px solid black;\n" +
    "    background-color: #ff4860;\n" +
    "    position: absolute;\n" +
    "    bottom:-1px;\n" +
    "    border-radius: 50%;\n" +
    "}";
export default string

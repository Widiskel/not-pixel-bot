const a5_0x548620=a5_0x3c60;(function(_0x19d8a,_0x3d3dcd){const _0x12943d=a5_0x3c60,_0xdd00ea=_0x19d8a();while(!![]){try{const _0x418f98=-parseInt(_0x12943d(0x135))/0x1*(-parseInt(_0x12943d(0x132))/0x2)+-parseInt(_0x12943d(0x137))/0x3*(parseInt(_0x12943d(0x125))/0x4)+-parseInt(_0x12943d(0x138))/0x5+parseInt(_0x12943d(0x13a))/0x6*(-parseInt(_0x12943d(0x12c))/0x7)+parseInt(_0x12943d(0x12a))/0x8*(parseInt(_0x12943d(0x124))/0x9)+-parseInt(_0x12943d(0x126))/0xa*(parseInt(_0x12943d(0x123))/0xb)+parseInt(_0x12943d(0x129))/0xc*(parseInt(_0x12943d(0x136))/0xd);if(_0x418f98===_0x3d3dcd)break;else _0xdd00ea['push'](_0xdd00ea['shift']());}catch(_0x2c246c){_0xdd00ea['push'](_0xdd00ea['shift']());}}}(a5_0x4ae8,0x234f4));function a5_0x4ae8(){const _0x34bf51=['2748EapGkf','1072312YVjrZB','YYYY-MM-DD\x20HH:mm:ss','1436015biliSj','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','File','level','debug','setLevel','6Cfndqt','logger','error','22271okoytX','20605UMuIyM','9XOUJdX','442215skOjnd','truncate','6xeIezu','log/app.log','info','11693ikUAIj','18kBrPcI','203036cbuGlZ','1010JxZPNL','Log\x20file\x20cleared','warn'];a5_0x4ae8=function(){return _0x34bf51;};return a5_0x4ae8();}import{createLogger,format,transports}from'winston';import a5_0x18e740 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0xf134b4,message:_0x41beb4,timestamp:_0x45d5db})=>{return _0x45d5db+'\x20['+_0xf134b4+']:\x20'+_0x41beb4;});function a5_0x3c60(_0x37e7fa,_0x414b10){const _0x4ae838=a5_0x4ae8();return a5_0x3c60=function(_0x3c606f,_0x370bcb){_0x3c606f=_0x3c606f-0x121;let _0x343c24=_0x4ae838[_0x3c606f];return _0x343c24;},a5_0x3c60(_0x37e7fa,_0x414b10);}class Logger{constructor(){const _0x11e734=a5_0x3c60;this[_0x11e734(0x133)]=createLogger({'level':'debug','format':combine(timestamp({'format':_0x11e734(0x12b)}),colorize(),customFormat),'transports':[new transports[(_0x11e734(0x12e))]({'filename':_0x11e734(0x121)})],'exceptionHandlers':[new transports[(_0x11e734(0x12e))]({'filename':_0x11e734(0x121)})],'rejectionHandlers':[new transports[(_0x11e734(0x12e))]({'filename':_0x11e734(0x121)})]});}[a5_0x548620(0x122)](_0x2e757e){const _0x25e982=a5_0x548620;this[_0x25e982(0x133)][_0x25e982(0x122)](_0x2e757e);}[a5_0x548620(0x128)](_0x117fbc){const _0x13c281=a5_0x548620;this[_0x13c281(0x133)][_0x13c281(0x128)](_0x117fbc);}[a5_0x548620(0x134)](_0x580e9f){const _0x3082fc=a5_0x548620;this['logger'][_0x3082fc(0x134)](_0x580e9f);}[a5_0x548620(0x130)](_0x249aaf){const _0x43acd6=a5_0x548620;this[_0x43acd6(0x133)][_0x43acd6(0x130)](_0x249aaf);}[a5_0x548620(0x131)](_0x558091){const _0x277ac6=a5_0x548620;this[_0x277ac6(0x133)][_0x277ac6(0x12f)]=_0x558091;}['clear'](){const _0x1b9b79=a5_0x548620;a5_0x18e740[_0x1b9b79(0x139)](_0x1b9b79(0x121),0x0,_0xbf1797=>{const _0x5c1c9b=_0x1b9b79;_0xbf1797?this[_0x5c1c9b(0x133)][_0x5c1c9b(0x134)](_0x5c1c9b(0x12d)+_0xbf1797['message']):this[_0x5c1c9b(0x133)][_0x5c1c9b(0x122)](_0x5c1c9b(0x127));});}}export default new Logger();
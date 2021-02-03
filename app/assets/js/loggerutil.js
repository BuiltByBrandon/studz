class LoggerUtil {

    constructor(prefix, style){
        this.prefix = prefix
        this.style = style
    }

    log(){
        console.log.apply(null, [this.prefix, this.style, ...arguments])
        console.log(__dirname);
        console.log(__filename);
        console.log(exports);
        console.log(module);
    }

    info(){
        console.info.apply(null, [this.prefix, this.style, ...arguments])
        console.log(__dirname);
        console.log(__filename);
    }

    warn(){
        console.warn.apply(null, [this.prefix, this.style, ...arguments])
    }

    debug(){
        console.debug.apply(null, [this.prefix, this.style, ...arguments])
        console.log(__dirname);
        console.log(__filename);
    }

    error(){
        console.error.apply(null, [this.prefix, this.style, ...arguments])
    }

    

}

module.exports = function (prefix, style){
    return new LoggerUtil(prefix, style)
}
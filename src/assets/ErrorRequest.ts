export default class ErrorRequest extends Error {
    constructor(error: Error) {
        super(error.message);
        console.log(this.stack, this.cause, this.name, this.message)
    }

}
export class fsNotAllowedCliendSideError extends Error {
    constructor(message="fs is not allowed in client side"){
        super(message);
        this.name  = 'fsNotAllowedRequest'
    }
} 
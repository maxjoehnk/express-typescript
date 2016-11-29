export class HttpError extends Error {
    public code: number;
}

export class UnauthorizedError extends HttpError {
    constructor(msg?: string) {
        super(msg ? msg : 'Unauthorized');
        this.code = 401;
    }
}

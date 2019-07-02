export interface StringValidator {
    isAcceptable(s: string) : boolean;
}

export class Zip implements StringValidator{
    isAcceptable(s: string) {
        return s.length === 0;
    }
}
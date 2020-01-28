export class Util{
    public static round2(value:number) : number{
        return Math.round(value * 100) / 100;
    }
}

export const MIN_BMI = 18.5;
export const Config = {
    MIN_BMI :18.5,
    MAX_BMI : 88.0
}
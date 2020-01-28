import { Util,Config } from "../utils/util";



export class Person {
    constructor(public weightKg: number,
        public heightCm: number) {

    }
    public bmi() {
        const heightM = this.heightCm / 100.0;
        let bmi = this.weightKg / heightM ** 2;
        return Util.round2(bmi);
    }

    public bmiCtegory() {
        if (this.bmi() < Config.MIN_BMI) {
            return "UnderWeight";
        } else if (this.bmi() > Config.MAX_BMI) {
            return "OverWeight";
        }
        else {
            return "Healthy";
        }
    }
}

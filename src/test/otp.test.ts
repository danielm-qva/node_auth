import { randoOtp } from "../util/generateOTP";

describe('Module OTP', () => {
    test('Generar otp', () => {
        expect(String(randoOtp(6)).length).toBe(6)
    });
    test('Generar otp size 4', () => {
        console.log(String(randoOtp(4)).length);
    });
})
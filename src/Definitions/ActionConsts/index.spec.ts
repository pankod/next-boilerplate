import { ActionConsts } from "./";

describe("Action constants", () => {
    describe("Home", () => {
        it("should have Home_SetReducer", () => {
            expect(ActionConsts.Home.SetReducer).toBe("Home_SetReducer");
        });

        it("should have Home_ResetReducer", () => {
            expect(ActionConsts.Home.ResetReducer).toBe("Home_ResetReducer");
        });
    });
});

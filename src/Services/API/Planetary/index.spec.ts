// #region Local Imports
import { PlanetaryService } from "@Services";
// #endregion Local Imports

describe("Planetary Service tests", () => {
    test("200 test", async () => {
        const result = await PlanetaryService.GetPlanetImage({
            params: { hd: true },
        });
        expect(result.copyright).toEqual("Pankod");
    });

    test("500 test", async () => {
        const result = await PlanetaryService.GetPlanetImage({
            params: { hd: false },
        });
        expect(result.copyright).toEqual("");
    });
});

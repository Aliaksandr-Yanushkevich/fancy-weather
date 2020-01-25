import { getCityData } from "../src/js/getCityData";
import Location from "../src/js/model/location";
describe("return data from gps coordinates", () => {
  const expectedCity = "Minsk";
  const expectedCountry = "Belarus";
  const expectedTimeZone = "Europe/Minsk";

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: function() {
          return {
            results: [
              {
                annotations: {
                  timezone: {
                    name: expectedTimeZone
                  }
                },
                components: {
                  city: expectedCity,
                  country: expectedCountry,
                  country_code: "by"
                }
              }
            ]
          };
        }
      })
    );
  });
  it("return data from gps coordinates", async () => {
    const result = await getCityData();
    expect(result).toEqual(
      new Location(expectedCity, expectedCountry, expectedTimeZone)
    );
  });
});

import PxServ from "./index";

describe("PxServJS Test", () => {
  let pxServ: any;

  beforeAll(() => {
    pxServ = new PxServ({
      apiKey: "API_KEY",
    });
  });

  test("Save Data", async () => {
    const result = await pxServ.setData("temp", "24.3°C");
    expect(result.status).toBe(200);
  });

  test("Get Data", async () => {
    const result = await pxServ.getData("temp");
    expect(result.status).toBe(200);
    expect(result.data.value).toBe("24.3°C");
  });

  test("Toggle Data", async () => {
    const result = await pxServ.toggleData("light");
    expect(result.status).toBe(200);
  });

  test("Get All Data", async () => {
    const result = await pxServ.getAll();
    expect(result.status).toBe(200);
  });

  test("Remove Data", async () => {
    const resultTemp = await pxServ.removeData("temp");
    const resultLight = await pxServ.removeData("light");

    expect(resultTemp.status).toBe(200);
    expect(resultLight.status).toBe(200);
  });
});

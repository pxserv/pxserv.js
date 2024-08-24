import { Config } from "./src/types/config";
import setData from "./src/functions/setData";
import getData from "./src/functions/getData";

class PxServJS {
  config: Config;
  constructor(config: Config) {
    this.config = {
      apiKey: config.apiKey,
      baseURL: config.baseURL || "https://api.pxserv.net",
    };
  }
  setData = (key: string, value: string) => setData(key, value, this.config);
  getData = (key: string) => getData(key, this.config);
}

export default PxServJS;

import { Config } from "./types/config";
import setData from "./functions/setData";
import getData from "./functions/getData";
import getAll from "./functions/getAll";
import removeData from "./functions/removeData";
import toggleData from "./functions/toggleData";

class PxServJS {
  config: Config;
  constructor(config: Config) {
    this.config = {
      apiKey: config.apiKey,
      baseURL: config.baseURL || "https://api.pxserv.net",
    };
  }

  setData = (key: string, value: string) => setData(key, value, this.config);
  toggleData = (key: string) => toggleData(key, this.config);
  getData = (key: string) => getData(key, this.config);
  getAll = () => getAll(this.config);
  removeData = (key: string) => removeData(key, this.config);
}

export default PxServJS;

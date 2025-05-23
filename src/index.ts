import { Config } from "./types/config";
import setData from "./functions/setData";
import getData from "./functions/getData";
import getAll from "./functions/getAll";
import removeData from "./functions/removeData";
import toggleData from "./functions/toggleData";
import { PxServResult } from "./types/result";

class PxServ {
  config: Config;
  constructor(config: Config) {
    this.config = {
      apiKey: config.apiKey,
      baseURL: config.baseURL || "https://api.pxserv.net",
    };
  }

  setData = async (key: string, value: string): Promise<PxServResult> => {
    return setData(key, value, this.config);
  };

  toggleData = async (key: string): Promise<PxServResult> => {
    return toggleData(key, this.config);
  };

  getData = async (key: string): Promise<PxServResult> => {
    return getData(key, this.config);
  };

  getAll = async () => {
    return getAll(this.config);
  };

  removeData = async (key: string): Promise<PxServResult> => {
    return removeData(key, this.config);
  };
}

export default PxServ;
export type { PxServResult };

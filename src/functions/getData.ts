import fetch from "node-fetch";
import { Config } from "../types/config";

export default (key: string, config: Config) =>
  new Promise<void>(async (resolve, reject) => {
    try {
      const request = await fetch(`${config.baseURL}/database/getData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: config.apiKey,
        },
        body: JSON.stringify({
          key,
        }),
      });

      const statusCode = request.status;
      const response = await request.json();

      if (statusCode !== 200) return reject(`api error : ${response.message}`);

      resolve(response.data.value);
    } catch (err: any) {
      reject(`error sending request: ${err.toString()}`);
    }
  });

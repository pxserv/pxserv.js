import fetch from "node-fetch";
import { Config } from "../types/config";

export default (config: Config) =>
  new Promise<void>(async (resolve, reject) => {
    try {
      const request = await fetch(`${config.baseURL}/database/getAll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: config.apiKey,
        },
        body: JSON.stringify({}),
      });

      const statusCode = request.status;
      const response = await request.json();

      if (statusCode !== 200) return reject(`api error : ${response.message}`);

      resolve(response.data);
    } catch (err: any) {
      reject(`error sending request: ${err.toString()}`);
    }
  });

import fetch from "node-fetch";
import { Config } from "../types/config";

export default (key: string, value: string, config: Config) =>
  new Promise<void>(async (resolve, reject) => {
    try {
      const request = await fetch(`${config.baseURL}/database/setData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          apiKey: config.apiKey,
          key,
          value,
        }),
      });

      const statusCode = request.status;
      const response = await request.json();

      if (statusCode !== 200)
        return reject(`api error : ${response.messages.en}`);

      resolve();
    } catch (err: any) {
      reject(`error sending request: ${err.toString()}`);
    }
  });

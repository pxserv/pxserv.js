import fetch from "node-fetch";
import { Config } from "../types/config";

export default async function setData(
  key: string,
  value: string,
  config: Config
): Promise<void> {
  try {
    const response = await fetch(`${config.baseURL}/database/setData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: config.apiKey,
      },
      body: JSON.stringify({ key, value }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`API error: ${data.message}`);
    }

    return;
  } catch (err: any) {
    throw new Error(`Error sending request: ${err.toString()}`);
  }
}

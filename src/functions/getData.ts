import fetch from "node-fetch";
import { Config } from "../types/config";

export default async function getData(
  key: string,
  config: Config
): Promise<string> {
  try {
    const response = await fetch(`${config.baseURL}/database/getData`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: config.apiKey,
      },
      body: JSON.stringify({ key }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`API error: ${data.message}`);
    }

    return data["data"].value;
  } catch (err: any) {
    throw new Error(`Error sending request: ${err.toString()}`);
  }
}

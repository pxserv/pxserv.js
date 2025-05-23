import fetch from "node-fetch";
import { Config } from "../types/config";
import { PxServResult } from "../types/result";

export default async function setData(
  key: string,
  value: string,
  config: Config
): Promise<PxServResult> {
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

    return {
      status: response.status,
      message: data["message"],
      data: {},
    };
  } catch (err: any) {
    throw new Error(`Error sending PxServ request: ${err.toString()}`);
  }
}

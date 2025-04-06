import fetch from "node-fetch";
import { Config } from "../types/config";

type GetAll = Record<
  string,
  {
    lastUpdate: Date;
    icon: string;
    value: string;
  }
>;

export default async function getAll(config: Config): Promise<GetAll> {
  try {
    const response = await fetch(`${config.baseURL}/database/getAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apikey: config.apiKey,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`API error: ${data.message}`);
    }

    return data["data"];
  } catch (err: any) {
    throw new Error(`Error sending request: ${err.toString()}`);
  }
}

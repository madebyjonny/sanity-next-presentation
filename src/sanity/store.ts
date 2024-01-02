import * as queryStore from "@sanity/react-loader";
import { client } from ".";
export const token = process.env.SANITY_API_READ_TOKEN;
queryStore.setServerClient(client.withConfig({ token }));

export const { loadQuery } = queryStore;

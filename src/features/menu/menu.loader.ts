import { getMenu } from "../../services/apiRestaurant";

export async function menuLoader() {
  const menu = await getMenu();

  return menu;
}

export type MenuLoaderResponse = Awaited<ReturnType<typeof menuLoader>>;

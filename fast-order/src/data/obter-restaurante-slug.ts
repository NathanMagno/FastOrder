import { db } from "@/lib/prisma";

export const obterRestauranteSlug = async (slug: string) => {
  const restaurants = await db.restaurant.findUnique({ where: { slug } });

  return restaurants;
};

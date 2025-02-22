import { obterRestauranteSlug } from "@/data/obter-restaurante-slug";

interface RestaurantesProps {
  params: Promise<{ slug: string }>;
}

const Restaurantes = async ({ params }: RestaurantesProps) => {
  const { slug } = await params;

  const restaurants = await obterRestauranteSlug(slug);

  return <h1>{restaurants?.name}</h1>;
};

export default Restaurantes;

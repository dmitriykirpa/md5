import { Context, Product } from 'src/types';

type GetProductParams = {
  productSlug: string;
};

export async function getProduct(
  context: Context,
  params: GetProductParams
): Promise<Product> {
  const { data } = await context.client.get<Product>(
    `/v1/products/${params.productSlug}`
  );

  return data;
}

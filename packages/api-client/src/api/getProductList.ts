import { Context, Product } from 'src/types';

type GetProductListParams = {
  categorySlug: string;
  limit: number;
  offset: number;
};

export async function getProductList(
  context: Context,
  params: GetProductListParams
): Promise<Product> {
  const { data } = await context.client.get<Product>(
    `/v1/categories/${params.categorySlug}/products`,
    {
      params: {
        limit: params.limit,
        offset: params.offset
      }
    }
  );

  return data;
}

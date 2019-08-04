export default async function fetchData(url, total, rating, method = 'GET') {
  const response = await fetch(
    url,
    {
      method,
      headers: {
        'x-size': total,
      },
    },
  );

  return response;
}

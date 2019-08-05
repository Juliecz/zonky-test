export default async function fetchData(url, total, rating, method = 'GET') {
  return await fetch(
    url,
    {
      method,
      headers: {
        'x-size': total,
      },
    },
  );
}

export async function getUsersPages({ searchTerm, page }) {
  const res = await fetch(
    `${
      process.env.HOST ? process.env.HOST : 'http://localhost:3000'
    }/api/users?${searchTerm ? `search=${searchTerm}` : ''}${
      page ? `&page=${page}` : ''
    }`
  );
  const data = await res.json();
  return data;
}

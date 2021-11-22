export async function getUser({ user }) {
  const res = await fetch(
    `${
      process.env.HOST ? process.env.HOST : 'http://localhost:3000'
    }/api/user?user=${user}`
  );
  const data = await res.json();
  return data;
}

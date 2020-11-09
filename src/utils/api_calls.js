export const apiTest = async () => {
  const res = await fetch(`https://codifyinditest.com/script_test/api-test/`);
  const data = await res.json();
  return data;
}
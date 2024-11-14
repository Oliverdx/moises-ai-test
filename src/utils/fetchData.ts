export async function fetchData (url="global", locale = "en"){
  let data;

  try {
    const response = await fetch(`http://localhost:4000/${url}?locale=${locale}`);
    data = await response.json();
    return data || {};

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

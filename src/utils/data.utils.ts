export const getData = async <T>(url: string): Promise<T | []> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(`Failed data request. Status ${response.status}`);
      return [];
    }

    return await response.json();

  } catch (error) {
    console.log(error);
    return [];
  }
}
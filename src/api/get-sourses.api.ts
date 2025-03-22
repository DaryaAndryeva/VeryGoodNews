export const getSourses = async () => {
  try {
    const response = await fetch("https://verygoodnews.online/api/sources", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      status: response.status,
      data: data,
    };
  } catch (e) {
    console.log(e);
  }
};

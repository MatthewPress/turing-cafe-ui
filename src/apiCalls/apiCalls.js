const getData = async (path) => {
  const response = await fetch(`http://localhost:3001/api/v1/reservations`)
  try {
    if (!response.ok) {
      throw new Error();
    } else {
      const data = await response.json()
      return data;
    }
  } catch (error) {
    console.log(error)
  }
}

export { getData };
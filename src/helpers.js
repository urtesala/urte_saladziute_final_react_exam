export async function sendRequest(whatToSend, url) {
  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(whatToSend),
    });
    if (!resp.ok) {
      throw await resp.json();
    }
    const result = await resp.json();
    //   console.log('result ===', result);
    return [result, null];
  } catch (error) {
    return [null, error];
  }
}

export function fireObjToArr(fireObj) {
  const dataArr = [];
  for (const key in fireObj) {
    const value = fireObj[key];
    value.id = key;
    dataArr.push(value);
  }
  //console.log('dataArr ===', dataArr);
  return dataArr;
}
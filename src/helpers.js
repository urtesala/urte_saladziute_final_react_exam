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
      // su spred
      //dataArr.push({ id: key, ...fireObj[key] });
      // console.log('key ===', key);
      const value = fireObj[key];
      value.id = key;
      // console.log('value ===', value);
      dataArr.push(value);
    }
    console.log('dataArr ===', dataArr);
    return dataArr;
  }
  
  export const getData = async (from) => {
    try {
      const resp = await fetch(from);
      return [await resp.json(), null];
    } catch (error) {
      return [null, error];
    }
  };
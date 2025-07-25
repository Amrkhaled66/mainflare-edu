function chunkWithSlice<T>(array: T[], size: number): T[][] {
    const result= [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
  

  export default chunkWithSlice
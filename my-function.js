export const handler = async (event) => {
  
    const message = event.queryStringParameters.keyword;
    const response = `MJ says ${message}`
    
    return response;
  };
  
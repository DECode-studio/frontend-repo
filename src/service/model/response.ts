class ResponseModel {
    codeResponse?: number;
    messageResponse?: string;
    dataResponse?: any;
  
    constructor(
      codeResponse?: number,
      messageResponse?: string,
      dataResponse?: any,
    ) {
      this.codeResponse = codeResponse;
      this.messageResponse = messageResponse;
      this.dataResponse = dataResponse;
    }
  }
  
  export default ResponseModel
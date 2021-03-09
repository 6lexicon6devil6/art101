function getAjaxData(){
  $.ajax({
    url: "https://en.wikipedia.org/api/rest_v1/page/summary/Alan_Turing"
    type: "GET",
    datatype: successFun,
    error:
    
  })
}

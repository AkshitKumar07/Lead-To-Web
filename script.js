function handleSubmit() {
 let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");

  //string ---- date (en_In)

  let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
  outputdate.value = formattedDate;

}


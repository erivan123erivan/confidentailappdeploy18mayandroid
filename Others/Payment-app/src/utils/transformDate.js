export const transformDate = (date) => {
  var day = date.getDate();
  var month = date.getMonth() + 1; // getMonth returns 0-11, so add 1 to get 1-12
  var year = date.getFullYear();

  var dateString = day + "/" + month + "/" + year;
  return dateString;
};

function truncate(str, maxlength) {
  if (str !== undefined && str !== null && maxlength !== undefined && maxlength !== null ) {
     if (str.length > maxlength) {
      return str.substr(0 ,maxlength-1) + '…';  
  }
     else {
         return str;
     } 
}
    return null;
}

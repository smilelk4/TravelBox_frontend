const dateDisplay = dateString => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return `${year}-${month + 1}-${day}`;
} 

export default dateDisplay;
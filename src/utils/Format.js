export const formatDate = initialDate => {
  const date = new Date(initialDate)
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const month = monthNames[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
}

export const Ellipsis = text => {
  return text.length > 120 ? text.slice(0, 120) + '..' : text
} 

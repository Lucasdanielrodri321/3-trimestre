const getCSS = (variavel) => {
    const bodyStyle = getComputedStyle(documemt.body)
    return bodyStyle.getPropertyValue(variavel)
  }
  
  const tickConfig = {
    color: getCSS('--primary-color'),
    size: 16,
    family: getCSS('--font')
  }
  
  export { getCSS, tickConfig }
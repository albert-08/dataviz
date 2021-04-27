console.log('D3', d3)

d3.select('body').style('background-color', 'pink')

d3.selectAll('p').style('color', () => {
  return "hsl(" + Math.random() * 360 + ",100%,50%)"
})

const dataSet = [3, 5, 6, 8, 18, 30]

d3
  .select('body')
  .selectAll('h3')
  .data(dataSet)
  .enter()
  .append('h3')
  .text((d) => {
    return `Soy el número ${d}`
  })

const paises = [
  { nombre: 'México', porcentaje: 875, color: 'green' },
  { nombre: 'Colombia', porcentaje: 763, color: 'yellow' }
]

d3
  .select('body')
  .selectAll('div')
  .data(paises)
  .enter()
  .append('div')
  .style('height', '40px')
  .style('background', (d) => {
    return d.color
  })
  .style('width', (d) => {
    return `${d.porcentaje}px`
  })
  .text((d) => {
    return `${d.nombre} ${d.porcentaje}`
  })

const datosRandom = [21,43,12,46,35,67,99,34,87,1]

console.log(d3.sum(datosRandom))
console.log(d3.max(datosRandom))
console.log(d3.min(datosRandom))
console.log(d3.extent(datosRandom))
console.log(d3.mean(datosRandom))
console.log(d3.range(1, 11))
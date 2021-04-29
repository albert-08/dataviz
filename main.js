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


//Creación de SVG
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', '500px')

  const data = ['circulo_1', 'circulo_2']

  svg
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', (d, i) => {
      return 200 * (i + 1)
    })
    .attr('cy', 70)
    .attr('r', 70)
    .attr('id', (d) => d)
    .style('fill', 'purple')

//Eventos
//Seleccionar que elemento quiero para agregar un evento
//Escuchar un evento con on
svg
  .select('#circulo_1')
  .on('click', (e, d) => {
    alert(`Le diste click a: ${d}`)
  })
svg
  .select('#circulo_2')
  .on('mouseover', (d) => {
    svg
      .select('#circulo_2')
      .style('fill', 'yellow')
  })
  .on('mouseout', () => {
    svg
      .select('#circulo_2')
      .style('fill', 'purple')
  })

//Gráfica de planetas.
d3
  .csv('planetas.csv')
  .then((result) => result.map((d) => ({
    planet: d.planeta,
    distance: parseInt(d.kmDistanciaAlSol),
    diameter: parseInt(d.diametroKm)
  })))
  .then((data) => {
    const width = 1700
    const height = 700

    const maxDistance = d3.max(data, (d) => d.distance)
    const minDistance = d3.min(data, (d) => d.distance)

    const maxDiameter = d3.max

    const escalaDistancia = d3.scaleLinear()
      .range([10, width - 25])
      .domain([minDistance, maxDistance])

    const escalaDiametro = d3.scaleLinear()
      .range([0, (width - 25)])
      .domain([0, maxDistance])

    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
    
      svg
        .selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d) => escalaDistancia(d.distance))
        .attr('cy', height / 2)
        .attr('r', (d) => escalaDiametro(d.diameter / 10))
        .style('fill', (d) => color(d.planet))
        .attr('id', (d) => d.planet)

    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })

d3
  .csv('AutosVendidosFeb2016.csv')
  .then((result) => result.map((d) => ({
    name: d.GRUPO,
    quantity: parseInt(d.CANTIDAD)
  })))
  .then((data) => {
    const width = 1900
    const height = 600

    data.sort((a, b) => a.quantity > b.quantity ? -1 : 1)
    console.log(data)

    const margin = { top: 20, rigth: 20, bottom: 40, left: 45 }

    const width = chartWidth - margin.rigth - margin.left
    const height = chartHeight - margin.top - margin.bottom

    const maxQuantity = d3.max(data, (d) => d.quantity)

    const scalaY = d3.scaleLinear()
      .range([ height, 0 ])
      .domain([ 0, maxQuantity ])
    
    const scalaX = d3.sacaleBand()
      .rangeRound([0, width])
      .domain(data.map(d => d.name)) 
  }).catch((err) => {
    console.log(err)
  })
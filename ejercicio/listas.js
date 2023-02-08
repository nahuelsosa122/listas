const comprar = ["Leche", "Huevos", "Mantequilla", "Miel", "Yogures"]

comprar.push("Aceite de Girasol")
comprar.pop()

const peliculas = [
    {
        titulo: "Donde estan las rubias",
        director: "Shawn Wayans y Marlon Wayans.",
        fecha: new Date(2004, 10, 26)
    },
    {
        titulo: "Spider-Man: No Way Home",
        director: "Jon Watts",
        fecha: new Date(2021, 11, 16)
    },
    {
        titulo: "Una esposa de mentira",
        director: "Allan Loeb y Timothy Dowling",
        fecha: new Date(2011, 2, 11)
    }
]

const peliculasNuevas = peliculas.filter(pelicula => pelicula.fecha > new Date(2010, 0, 1))

const directores = peliculas.map(pelicula => {
    return pelicula.director
})
const titulos = peliculas.map(pelicula => {
    return pelicula.titulo
})
const directores_titulos = directores.concat(titulos)
const directores_titulos_prop = [...directores, ...titulos]
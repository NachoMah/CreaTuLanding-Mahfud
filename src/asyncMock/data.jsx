const products = [
    {
        id: "01",
        name: "Sable de luz: Darth Vader ",
        description: "Réplica inspirada en el sable de luz de Darth Vader. Diseño imponente del Lado Oscuro, ideal para coleccionistas y fanáticos de Star Wars.",
        stock: 12,
        price: 15000,
        category: "sables",
        img: "https://i.postimg.cc/JnqPf6gq/lightsaber_DV.webp", 
    },

    {
        id: "02",
        name: "Funko Pop: Darth Vader",
        description: "Figura Funko Pop de Darth Vader con su clásico traje negro. Un infaltable para cualquier colección de Star Wars.",
        stock: 20,
        price: 10000,
        category: "funko pop",
        img: "https://i.postimg.cc/FsfVpHrv/funko_DV.jpg", 
    },

    {
        id: "03",
        name: "Halcón Milenario",
        description: "Modelo del Halcón Milenario, la nave más famosa de la galaxia. Perfecto para exhibición y para fans de las grandes aventuras espaciales.",
        stock: 26,
        price: 32000,
        category: "naves",
        img: "https://i.postimg.cc/q7Y3z8KT/halcon_Milenario.jpg", 
    },

    {
        id: "04",
        name: "Sable de luz: Anakin Skywalker ",
        description: "Réplica del sable de luz de Anakin Skywalker. Diseño elegante y equilibrado, ideal para fans del personaje y coleccionistas.",
        stock: 11,
        price: 15000,
        category: "sables",
        img: "https://i.postimg.cc/sXVJ4PXQ/lightsaber_AS.jpg", 
    },

    {
        id: "05",
        name: "Funko Pop: Luke Skywalker",
        description: "Figura Funko Pop de Luke Skywalker. Representación clásica del héroe de la saga, perfecta para sumar a tu colección.",
        stock: 10,
        price: 10000,
        category: "funko pop",
        img: "https://i.postimg.cc/XYjFhNW2/funko_LS.webp", 
    },
]

let error = false
export const getProducts = () => {
    return new Promise((resolve, reject) => {setTimeout(() => {
        if(error) {
            reject("Ocurrió un error. Por favor, ingrese a la página en otro momento")
        }
        else {
            resolve(products)
        }
    }, 1000)

}) 
}
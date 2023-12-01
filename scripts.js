// Gallery: Su única funcionalidad es albergar imágenes y devolverlas dependiendo del método que utilicemos. No interactúa con HTML.
// constructor: Acepta dos parámetros, ambos conjuntos de imágenes.
// getRandomCivil: devuelve un vehículo aleatorio civil de la galería.
// getRandomMilitary: devuelve un vehículo aleatorio militar de la galería.
// getAll: devuelve el conjunto de vehículos de la galería, tanto militares como civiles.

class Gallery {
  constructor(civilImages, militaryImages) {
    this.images = {
      civil: civilImages,
      military: militaryImages,
    };
  }

  getRandomCivil() {
    return this.getRandomImage("civil");
  }

  getRandomMilitary() {
    return this.getRandomImage("military");
  }

  getAllImages() {
    const allImages = [];

    for (const categories in this.images) {
      const arrayImg = this.images[categories];

      for (let i = 0; i < arrayImg.length; i++) {
        allImages.push(arrayImg[i]);
      }
    }
    return allImages;
  }

  getRandomImage(categories) {
    const arrayImg = this.images[categories];

    if (arrayImg.length === 0) {
      return null;
    }

    const random = arrayImg[Math.floor(Math.random() * arrayImg.length)];

    return random;
  }
}

const civilAircrafts = [
  "assets/avion-civil-1.jpg",
  "assets/avion-civil-2.jpg",
  "assets/avion-civil-3.jpg",
  "assets/avion-civil-4.jpg",
  "assets/avion-civil-5.jpg",
];

const militaryAircrafts = [
  "assets/avion-militar-1.jpg",
  "assets/avion-militar-2.jpg",
  "assets/avion-militar-3.jpg",
  "assets/avion-militar-4.jpg",
  "assets/avion-militar-5.jpg",
];

const civilHelicopters = [
  "assets/helicoptero-civil-1.jpg",
  "assets/helicoptero-civil-2.jpg",
  "assets/helicoptero-civil-3.jpg",
  "assets/helicoptero-civil-4.jpg",
  "assets/helicoptero-civil-5.jpg",
];

const militaryHelicopters = [
  "assets/helicoptero-militar-1.jpg",
  "assets/helicoptero-militar-2.jpg",
  "assets/helicoptero-militar-3.jpg",
  "assets/helicoptero-militar-4.jpg",
  "assets/helicoptero-militar-5.jpg",
];

// Painter: La clase encargada de pintar las imágenes, de interactuar con el DOM.
//Encargada de crear etiquetas y manipular el DOM para agregarlas.
class Painter {
  constructor() {
    this.createGallery();
  }

  createGallery() {
    this.gallery = document.createElement("section");
    document.body.appendChild(this.gallery);
  }

  createImageTag(urlImg) {
    const picture = document.createElement("picture");
    const img = document.createElement("img");
    img.src = urlImg;
    picture.appendChild(img);
    return picture;
  }

  paintSingleImage(urlImg) {
    const imageTag = this.createImageTag(urlImg);
    this.gallery.appendChild(imageTag);
  }

  paintMultipleImages(arrImages) {
    arrImages.forEach((urlImg) => {
      const imageTag = this.createImageTag(urlImg);
      this.gallery.appendChild(imageTag);
    });
  }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
// console.log(aircrafts.getRandomCivil());
const helicopters = new Gallery(civilHelicopters, militaryHelicopters);
const painter = new Painter();

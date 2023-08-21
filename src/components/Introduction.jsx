import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "https://i.ytimg.com/vi/UHU3pQM6xEM/maxresdefault.jpg",
    text: "En el remoto espacio, el valiente pato Quax vive en el planeta Aviaria.",
  },
  {
    image:
      "https://w0.peakpx.com/wallpaper/207/857/HD-wallpaper-artistic-pixel-art-space-moon.jpg",
    text: "Un día, un meteorito con un virus misterioso cae en el planeta, transformando a las criaturas en seres agresivos.",
  },
  {
    text: "Quax se da cuenta de que debe enfrentar directamente este desafío y decide emprender un viaje para encontrar una cura y detener la propagación del virus. Viaja a través de la galaxia, enfrentando peligrosas criaturas infectadas y obstáculos mortales.",
  },
  {
    text: "¡Último slide!",
  },
];

const Introduction = ({ onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [introductionFinished, setIntroductionFinished] = useState(false);
  const [typedText, setTypedText] = useState("");

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setTypedText("");
    } else {
      setIntroductionFinished(true);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
      setTypedText("");
    }
  };

  const skipIntroduction = () => {
    setIntroductionFinished(true);
  };

  useEffect(() => {
    if (introductionFinished) {
      onFinish();
    }
  }, [introductionFinished, onFinish]);

  useEffect(() => {
    if (slides[currentIndex].text) {
      let currentText = "";
      let textIndex = 0;
  
      const typingInterval = setInterval(() => {
        if (textIndex < slides[currentIndex].text.length) {
          currentText += slides[currentIndex].text[textIndex];
          setTypedText(currentText);
          textIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80);// tiempo del contador de las letras 
  
      return () => {
        clearInterval(typingInterval);
      };
    }
  }, [currentIndex]);

  return (
    <div
  className="story-container text-white"
  style={{
    fontFamily: "Silkscreen",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
  <div className="image-story" style={{ marginBottom: "1rem", maxWidth: "100%" }}>
    {slides[currentIndex].image && (
      <img
        src={slides[currentIndex].image}
        alt={`Slide ${currentIndex}`}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    )}
  </div>
  <div className="buttons-story">
    {currentIndex > 0 && (
      <button className="prev-button" onClick={prevSlide}>
        Anterior
      </button>
    )}
    <button className="next-button" onClick={nextSlide}>
      {currentIndex < slides.length - 1 ? "Siguiente" : "Terminar"}
    </button>
    {currentIndex !== slides.length - 1 && (
      <button className="skip-button" onClick={skipIntroduction}>
        Omitir
      </button>
    )}
  </div>
  <div
    className="text-2xl break-words"
    style={{ justifyContent: "left", maxWidth: "80%", margin: "0 auto" }}
  >
    <p>{typedText}</p>
  </div>
</div>
  );
};
export default Introduction;

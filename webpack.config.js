const path = require("path");

module.exports = {
  entry: "./src/index.js", // Twój plik wejściowy
  output: {
    filename: "bundle.js", // Nazwa pliku wynikowego
    path: path.resolve(__dirname, "dist"), // Katalog wyjściowy
  },
  module: {
    rules: [
      {
        test: /\.svg$/, // Dopasowuje pliki SVG
        use: "file-loader", // Wykorzystuje file-loader do obsługi plików SVG
      },
    ],
  },
};

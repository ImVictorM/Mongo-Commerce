db.produtos
  .find(
    { ingredientes: "picles" },
    { _id: 0, nome: 1, ingredientes: { $slice: 3 }, valoresNutricionais: 1 },
  );
export const search = (searchTerm, products, allergies) => {
  const filteredProducts = products.filter((product) => {
    const { name, ingredients, allergy } = product;
    const productMatches = name.toLowerCase().includes(searchTerm.toLowerCase());
    const ingredientMatches = ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const allergyMatches = allergy.some((allergyItem) =>
      allergyItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return productMatches || ingredientMatches || allergyMatches;
  });

  const filteredAllergies = allergies.filter((allergy) =>
    allergy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return { filteredProducts, filteredAllergies };
};
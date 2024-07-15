from RecipeBook.models import Recipe, Ingredients, CookingSteps

hn = Recipe.objects.create(name='Hakka Noodles')
m = Recipe.objects.create(name='Manchurian')
ssc = Recipe.objects.create(name='Sweet and Sour Chicken')
sr = Recipe.objects.create(name='Spring Rolls')

Ingredients.objects.bulk_create([
    Ingredients(name='200 grams Hakka noodles', recipe=hn),
    Ingredients(name='1 tablespoon oil', recipe=hn),
    Ingredients(name='1 onion, thinly sliced', recipe=hn),
    Ingredients(name='1 cup mixed vegetables julienned', recipe=hn),
    Ingredients(name='2-3 cloves garlic, finely chopped', recipe=hn),
    Ingredients(name='1 tablespoon soy sauce', recipe=hn),
    Ingredients(name='1 tablespoon chili sauce', recipe=hn),
    Ingredients(name='1 tablespoon vinegar', recipe=hn),
    Ingredients(name='1 teaspoon black pepper, freshly ground', recipe=hn),

    Ingredients(name='2 cups grated vegetables', recipe=m),
    Ingredients(name='2-3 tablespoons all-purpose flour (maida)', recipe=m),
    Ingredients(name='2-3 tablespoons cornflour', recipe=m),
    Ingredients(name='1 teaspoon ginger-garlic paste', recipe=m),
    Ingredients(name='1 tablespoon oil', recipe=m),
    Ingredients(name='2-3 cloves garlic, finely chopped', recipe=m),
    Ingredients(name='1 inch ginger, finely chopped', recipe=m),
    Ingredients(name='2-3 green chilies, finely chopped', recipe=m),
    Ingredients(name='1 onion, finely chopped', recipe=m),
    Ingredients(name='1 capsicum, finely chopped', recipe=m),
    Ingredients(name='2 tablespoons soy sauce', recipe=m),
    Ingredients(name='2 tablespoons chili sauce', recipe=m),
    Ingredients(name='2 tablespoons tomato ketchup', recipe=m),
    Ingredients(name='1 tablespoon vinegar', recipe=m),
    Ingredients(name='1 teaspoon sugar', recipe=m),
    Ingredients(name='1 cup water', recipe=m),
    Ingredients(name='1 tablespoon cornflour mixed in 2 tablespoons water', recipe=m),

    Ingredients(name='500 grams boneless chicken breast, cut into bite-sized pieces', recipe=ssc),
    Ingredients(name='1/2 cup all-purpose flour (maida)', recipe=ssc),
    Ingredients(name='1/2 cup cornflour', recipe=ssc),
    Ingredients(name='1 tablespoon oil', recipe=ssc),
    Ingredients(name='2-3 cloves garlic, finely chopped', recipe=ssc),
    Ingredients(name='1 onion, cut into chunks', recipe=ssc),
    Ingredients(name='1 bell pepper, cut into chunks', recipe=ssc),
    Ingredients(name='1/2 cup pineapple chunks (optional)', recipe=ssc),
    Ingredients(name='3 tablespoons tomato ketchup', recipe=ssc),
    Ingredients(name='2 tablespoons soy sauce', recipe=ssc),
    Ingredients(name='2 tablespoons white vinegar', recipe=ssc),
    Ingredients(name='3 tablespoons sugar', recipe=ssc),
    Ingredients(name='1 cup water', recipe=ssc),
    Ingredients(name='1 tablespoon cornflour mixed ', recipe=ssc),

    Ingredients(name='2 cups mixed vegetables ', recipe=sr),
    Ingredients(name='1/2 cup bean sprouts (optional)', recipe=sr),
    Ingredients(name='1/2 cup mushrooms, finely chopped (optional)', recipe=sr),
    Ingredients(name='2-3 cloves garlic, finely chopped', recipe=sr),
    Ingredients(name='1 inch ginger, finely chopped', recipe=sr),
    Ingredients(name='2 tablespoons soy sauce', recipe=sr),
    Ingredients(name='1 tablespoon chili sauce', recipe=sr),
    Ingredients(name='1 tablespoon vinegar', recipe=sr),
    Ingredients(name='1 tablespoon oil', recipe=sr),
    Ingredients(name='1 tablespoon all-purpose flour', recipe=sr),

])

CookingSteps.objects.bulk_create([

    CookingSteps(step='Boil noodles until al dente, drain and set aside.', step_no='1', recipe=hn),
    CookingSteps(step='Heat oil, sauté garlic and sliced onions.',step_no='2', recipe=hn),
    CookingSteps(step='Add vegetables, stir-fry until slightly tender.', step_no='3', recipe=hn),
    CookingSteps(step='Add soy sauce, chili sauce, vinegar, and noodles.', step_no='4', recipe=hn),
    CookingSteps(step='Season with salt and black pepper, mix well.',step_no='5', recipe=hn),
    CookingSteps(step='Garnish with spring onions, serve hot.',step_no='6', recipe=hn),

    CookingSteps(step='Mix grated vegetables, flour, cornflour, and spices.', step_no='1', recipe=m),
    CookingSteps(step='Form balls and deep-fry until golden brown.',step_no='2', recipe=m),
    CookingSteps(step='Heat oil, sauté garlic, ginger, and green chilies.', step_no='3', recipe=m),
    CookingSteps(step='Add onion, capsicum, soy sauce, chili sauce, and ketchup.', step_no='4', recipe=m),
    CookingSteps(step='Add water, cornflour mixture, and sugar; thicken sauce.', step_no='5', recipe=m),
    CookingSteps(step='Toss in Manchurian balls, garnish with spring onions.', step_no='6', recipe=m),

    CookingSteps(step='Coat chicken pieces with flour, cornflour, salt, and pepper.',step_no='1', recipe=ssc),
    CookingSteps(step='Deep-fry chicken until crispy and golden brown.',step_no='2', recipe=ssc),
    CookingSteps(step='Heat oil, sauté garlic and onion chunks.',step_no='3', recipe=ssc),
    CookingSteps(step='Add bell pepper, pineapple, and stir-fry briefly.',step_no='4', recipe=ssc),
    CookingSteps(step='Mix ketchup, soy sauce, vinegar, sugar, and water.',step_no='5', recipe=ssc),
    CookingSteps(step='Thicken with cornflour, add chicken, and coat well.',step_no='6', recipe=ssc),

    CookingSteps(step='Sauté garlic, ginger in oil, add chopped vegetables.', step_no='1', recipe=sr),
    CookingSteps(step='Add soy sauce, chili sauce, vinegar, and season.', step_no='2', recipe=sr),
    CookingSteps(step='Cook filling until vegetables are tender.',step_no='3', recipe=sr),
    CookingSteps(step='Place filling on spring roll wrapper, fold and seal.', step_no='4', recipe=sr),
    CookingSteps(step='Deep-fry rolls until crispy and golden brown.',step_no='5', recipe=sr),
    CookingSteps(step='Serve hot with dipping sauce.', step_no='6', recipe=sr),
])

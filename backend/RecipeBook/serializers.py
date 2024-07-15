from rest_framework import serializers
from .models import Recipe, Ingredients, CookingSteps, Comment


class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields = '__all__'


class IngredientsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ingredients
        fields = '__all__'


class CookingStepsSerializer(serializers.ModelSerializer):

    class Meta:
        model = CookingSteps
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'


class RecipeDetailedSerializer(serializers.ModelSerializer):

    ingredients = IngredientsSerializer(many=True)
    cooking_steps = CookingStepsSerializer(many=True)
    comments = CommentSerializer(many=True)

    class Meta:
        model = Recipe
        fields = ('id', 'name', 'cover', 'comments', 'ingredients', 'cooking_steps')

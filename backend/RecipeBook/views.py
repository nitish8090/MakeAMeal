from rest_framework import viewsets
from rest_framework.response import Response
from .models import Recipe, Comment
from .serializers import RecipeSerializer, CommentSerializer, RecipeDetailedSerializer


class RecipeViewSet(viewsets.ModelViewSet):

    serializer_class = RecipeSerializer
    queryset = Recipe.objects.all()

    def retrieve(self, request, pk):
        try:
            recipe = Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist:
            return Response({"error": "Recipe not found"}, status=404)
        else:
            serializer = RecipeDetailedSerializer(recipe)
            return Response(serializer.data)


class CommentViewSet(viewsets.ModelViewSet):

    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

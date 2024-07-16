from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
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

    @action(methods=['POST'], url_path='comment', detail=True)
    def add_comment(self, request, pk):
        try:
            recipe = Recipe.objects.get(pk=pk)
        except Recipe.DoesNotExist:
            return Response({"error": "Recipe not found"}, status=404)
        else:
            data = dict(request.data)
            data['recipe'] = recipe.id
            serializer = CommentSerializer(data=data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()
                return Response(serializer.data)


class CommentViewSet(viewsets.ModelViewSet):

    serializer_class = CommentSerializer
    queryset = Comment.objects.all()

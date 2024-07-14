from django.db import models


class Recipe(models.Model):
    name = models.CharField(max_length=100)


class Comment(models.Model):
    user = models.CharField(max_length=100)
    comment = models.TextField()
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='comments')

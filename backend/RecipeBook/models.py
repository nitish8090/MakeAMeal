from django.db import models


class Recipe(models.Model):
    name = models.CharField(max_length=100)
    cover = models.TextField(blank=True)

    def __str__(self) -> str:
        return self.name


class Ingredients(models.Model):
    name = models.CharField(max_length=250)
    recipe = models.ForeignKey(
        Recipe, on_delete=models.CASCADE, related_name='ingredients')


class CookingSteps(models.Model):
    step = models.CharField(max_length=250)
    step_no = models.IntegerField(default=1)
    recipe = models.ForeignKey(
        Recipe, on_delete=models.CASCADE, related_name='cooking_steps')


class Comment(models.Model):
    user = models.CharField(max_length=100)
    comment = models.TextField()
    recipe = models.ForeignKey(
        Recipe, on_delete=models.CASCADE, related_name='comments')

from django.contrib import admin
from .models import Recipe, Ingredients, CookingSteps, Comment


admin.site.register(Recipe)
admin.site.register(Ingredients)
admin.site.register(CookingSteps)
admin.site.register(Comment)
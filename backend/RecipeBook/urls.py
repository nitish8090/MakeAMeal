from rest_framework import routers
from .views import RecipeViewSet, CommentViewSet

router = routers.SimpleRouter()

router.register('recipe', RecipeViewSet)
router.register('comment', CommentViewSet)

urlpatterns = router.urls

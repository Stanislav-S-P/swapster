from django.urls import path
from app_swapster.views import main_view


urlpatterns = [
    path('', main_view, name='main'),
]

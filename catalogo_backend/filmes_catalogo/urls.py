from django.urls import path
from .views import lista_filmes

# função para mapear a URL para a função lista_filmes
urlpatterns = [
    path('api/filmes/', lista_filmes, name='lista_filmes'),
]

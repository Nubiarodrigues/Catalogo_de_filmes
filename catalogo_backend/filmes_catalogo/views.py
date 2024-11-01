from django.http import JsonResponse

# Endpoint da API simulada
def lista_filmes(request):
    filmes = [
        {"titulo": "The Matrix", "imagem": "http://localhost:8000/static/imagens/the_matrix.png", "ano_lancamento": 1999},
        {"titulo": "A Freira", "imagem": "http://localhost:8000/static/imagens/a_freira.jpg", "ano_lancamento": 2018},
        {"titulo": "Os Caça-Fantasmas", "imagem": "http://localhost:8000/static/imagens/caça_fantasmas.jpg", "ano_lancamento": 1984},
        {"titulo": "O Senhor dos Anéis: A Sociedade do Anel", "imagem": "http://localhost:8000/static/imagens/senhor_aneis.jpg", "ano_lancamento": 2001},
        {"titulo": "Titanic", "imagem": "http://localhost:8000/static/imagens/titanic.png", "ano_lancamento": 1997},
        {"titulo": "A Origem", "imagem": "http://localhost:8000/static/imagens/a_origem.jpg", "ano_lancamento": 2010},
        
    ]
    
    search = request.GET.get('search', '').strip()  
    if search:  
        filmes = [filme for filme in filmes if search.lower() in filme['titulo'].lower()]
    

    return JsonResponse(filmes, safe=False)





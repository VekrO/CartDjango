from django.urls import path
from .views import ProdutoCreate

urlpatterns = [
    path('create/', ProdutoCreate.as_view(), name='product-create')
]

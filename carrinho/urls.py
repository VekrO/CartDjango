from django.urls import path

# My Views
from .views import CartPage, CartRemove, Index

urlpatterns = [
    path('', Index.as_view(), name='index'),
    path('cart/', CartPage.as_view(), name='cart'),
    path('cart/remove/<int:pk>', CartRemove.as_view(), name='cart-remove'),
]

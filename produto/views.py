from django.shortcuts import redirect, render
from django.contrib import messages
from django.views.generic.base import View

from produto.models import Produto

# My Views
class ProdutoCreate(View):

    def get(self, request):
        return render(request, 'src/product-create.html')

    def post(self, request):

        # Cadastrar produto.
        name = request.POST.get('name')
        price = request.POST.get('price')
        quantity = request.POST.get('quantity')
        image = request.FILES.get('image')

        product = Produto()
        product.name = name
        product.price = str(price).replace(',', '.')
        product.quantity = quantity
        product.image = image
        product.save()

        messages.success(request, 'Produto cadastrado com sucesso.')

        return redirect('product-create')


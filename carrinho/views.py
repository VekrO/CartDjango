from django.shortcuts import redirect, render

# Class Based Views
from django.views.generic.base import View
from django.views.decorators.csrf import csrf_exempt
from carrinho.models import Cart

from produto.models import Produto

# My Views
class Index(View):
    
    def get(self, request):

        # Receber todos os produtos.
        products = Produto.objects.all()

        context = {
            'products': products
        }
        
        return render(request, 'src/index.html', context)

class CartPage(View):

    def get(self, request):
        products = Cart.objects.all()
        return render(request, 'src/cart.html', {'products': products})
    
    def post(self, request):

        # Receber e pegar parâmetros.
        product = Produto.objects.get(pk=request.POST.get('product_id'))
        
        # Salvar dados.
        # Verificar se já estão adicionados.
        try:

            exist = Cart.objects.filter(product=request.POST.get('product_id'))
            if(not exist):
                cart = Cart()
                cart.product = product
                cart.save()

        except:
            print('Erro')

        # Retorno as informações.
        return redirect('cart')

class CartRemove(View):
    
    def post(self, request, pk):
        # Recebe o ID.
        product = Cart.objects.filter(product=pk)
        product.delete()
        return redirect('cart')
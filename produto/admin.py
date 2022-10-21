from django.contrib import admin

# Admin
from .models import Produto
@admin.register(Produto)
class ProdutoAdmin(admin.ModelAdmin):
    pass
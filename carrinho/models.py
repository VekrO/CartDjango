from django.db import models

from produto.models import Produto

# Create your models here.
class Cart(models.Model):
    
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Produto, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    

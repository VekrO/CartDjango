# Generated by Django 4.1.2 on 2022-10-21 20:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('carrinho', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='cart',
            old_name='product',
            new_name='name',
        ),
    ]

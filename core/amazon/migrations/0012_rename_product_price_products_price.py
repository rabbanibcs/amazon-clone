# Generated by Django 3.2.6 on 2021-09-01 19:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('amazon', '0011_auto_20210901_1518'),
    ]

    operations = [
        migrations.RenameField(
            model_name='products',
            old_name='product_price',
            new_name='price',
        ),
    ]

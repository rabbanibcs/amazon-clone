# Generated by Django 3.2 on 2021-08-28 22:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('amazon', '0007_alter_subcategories_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subcategories',
            name='category_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='amazon.categories', verbose_name='category'),
        ),
    ]

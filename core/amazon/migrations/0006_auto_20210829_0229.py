# Generated by Django 3.2 on 2021-08-28 20:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('amazon', '0005_alter_categories_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subcategories',
            name='thumbnail',
        ),
        migrations.RemoveField(
            model_name='subcategories',
            name='url_slug',
        ),
    ]

# Generated by Django 3.2.6 on 2021-08-27 18:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('amazon', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='categories',
            name='thumbnail',
        ),
    ]

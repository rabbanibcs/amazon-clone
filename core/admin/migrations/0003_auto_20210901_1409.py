# Generated by Django 3.2.6 on 2021-09-01 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admin', '0002_auto_20210825_2111'),
    ]

    operations = [
        migrations.AlterField(
            model_name='merchantuser',
            name='address',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='merchantuser',
            name='gst_details',
            field=models.CharField(default='', max_length=255),
        ),
    ]

from django.db import models
from django.urls import reverse

from admin.models import MerchantUser


class Categories(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(default='',blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)

    def get_absolute_url(self):
        return reverse("categories",kwargs={})

    def __str__(self):
        return self.title


class SubCategories(models.Model):
    category_id = models.ForeignKey(Categories, on_delete=models.CASCADE, verbose_name='category')
    title = models.CharField(max_length=255)
    description = models.TextField(default='', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.IntegerField(default=1)

    def get_absolute_url(self):
        return reverse("sub_categories",kwargs={})

    def __str__(self):
        return self.title


class Products(models.Model):
    subcategories_id=models.ForeignKey(SubCategories,on_delete=models.CASCADE, verbose_name='category')
    title=models.CharField(max_length=255)
    brand=models.CharField(max_length=255,default='',blank=True)
    price=models.CharField(max_length=255)
    product_description=models.TextField(default='',blank=True)
    image_url=models.URLField()
    rating=models.DecimalField(default=5.00, max_digits=3,decimal_places=2)
    created_at=models.DateTimeField(auto_now_add=True)
    # added_by_merchant=models.ForeignKey(MerchantUser,on_delete=models.CASCADE)
    in_stock_total=models.IntegerField(default=1)
    is_active=models.IntegerField(default=1)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("products",kwargs={})










































































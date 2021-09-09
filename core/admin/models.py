from django.db import models
from django.contrib.auth.models import AbstractUser
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.urls import reverse
from .manager import CustomUserManager


class CustomUser(AbstractUser):
    user_type_choices = ((1, "Admin"), (2, "Staff"), (3, "Merchant"), (4, "Customer"))
    first_name = None
    last_name = None
    username = None
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=100, unique=True)
    user_type = models.CharField(max_length=20, choices=user_type_choices, default=1)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', ]
    objects = CustomUserManager()

    def __str__(self):
        return self.name.upper()


class AdminUser(models.Model):
    profile_pic = models.FileField(default="")
    user_id = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class StaffUser(models.Model):
    profile_pic = models.FileField(default="")
    user_id = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)


class MerchantUser(models.Model):
    user_id = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    profile_pic = models.FileField(default="")
    company_name = models.CharField(max_length=255)
    gst_details = models.CharField(max_length=255,default="")
    address = models.TextField(default="")
    created_at = models.DateTimeField(auto_now_add=True)


class CustomerUser(models.Model):
    user_id = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    profile_pic = models.FileField(default="")
    created_at = models.DateTimeField(auto_now_add=True)

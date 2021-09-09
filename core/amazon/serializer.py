from rest_framework import serializers
from .models import Products, Categories
from admin.models import CustomUser


class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = '__all__'


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'

#
# class LoginSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = CustomerUser
#         fields = ['email', 'password']


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id',  'email', 'password')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'name', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser.objects.create_user(validated_data['name'], validated_data['email'], validated_data['password'])
        return user

#
# {
#     "username": "admin",
#     "email": "admin@bot.com",
#     "password": "Password@123"
# }
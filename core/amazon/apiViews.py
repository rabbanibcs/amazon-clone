from rest_framework.views import APIView
from .models import Categories, SubCategories, Products
from .serializer import CategoriesSerializer, RegisterSerializer
from .serializer import ProductsSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate


class LoginAPI(APIView):

    def post(self, request, *args, **kwargs):
        user = authenticate(email=request.data['email'], password=request.data['password'])
        if user:
            # token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': Token.objects.get_or_create(user=user)[0].key,
                'user': {'id': user.id,
                         'name': user.name,
                         'email': user.email
                         }
            })
        else:
            return Response({
                'error': 'no user found'
            })


class RegisterAPI(APIView):

    def post(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": serializer.data,
            "token": Token.objects.create(user=user).key
        })


class CategoriesList(APIView):

    def get(self, request, format=None):
        categories = Categories.objects.all()
        serializer = CategoriesSerializer(categories, many=True)
        return Response(serializer.data)


class SubCategoriesList(APIView):

    def get(self, request, pk, format=None):
        subcategories = SubCategories.objects.filter(category_id=pk)
        serializer = CategoriesSerializer(subcategories, many=True)
        return Response(serializer.data)


class ProductListForCategory(APIView):
    # pk--category_id
    def get(self, request, pk, format=None):
        subcategories = SubCategories.objects.filter(category_id=pk)
        products = []
        for subcategory in subcategories:
            ps = Products.objects.filter(subcategories_id=subcategory.id)
            for p in ps:
                products.append(p)
        serializer = ProductsSerializer(products, many=True)
        return Response(serializer.data)


class ProductListForSubCategory(APIView):
    # pk-sub_category_id

    def get(self, request, pk, format=None):
        products = Products.objects.filter(subcategories_id=pk)
        serializer = ProductsSerializer(products, many=True)
        return Response(serializer.data)


class ProductApiView(APIView):

    def get(self, request, pk, format=None):
        product = Products.objects.get(pk=pk)
        serializer = ProductsSerializer(product)
        return Response(serializer.data)

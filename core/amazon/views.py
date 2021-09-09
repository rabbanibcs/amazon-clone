from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, DetailView, DeleteView, UpdateView
from rest_framework import viewsets
from rest_framework.views import APIView
from .models import Categories, SubCategories, Products
from django.shortcuts import render
from .serializer import CategoriesSerializer, RegisterSerializer
from .serializer import ProductsSerializer, UserSerializer
from rest_framework.response import Response
# from django.contrib.auth import login
from rest_framework.authtoken.views import ObtainAuthToken
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


class CategoriesView(ListView):
    model = Categories
    template_name = 'admin/categories.html'


class CategoryCreateView(CreateView):
    model = Categories
    fields = '__all__'
    template_name = 'admin/categoryCreate.html'


class CategoryDetailView(DetailView):
    model = Categories
    template_name = 'admin/categoryDetail.html'


class CategoryDeleteView(DeleteView):
    model = Categories
    success_url = reverse_lazy('categories')
    template_name = 'admin/categories_confirm_delete.html'


# SubCategories
class SubCategoriesView(ListView):
    model = SubCategories
    template_name = 'admin/sub-categories.html'


class SubCategoryCreateView(CreateView):
    model = SubCategories
    fields = '__all__'
    template_name = 'admin/sub-categoryCreate.html'


class SubCategoryDetailView(DetailView):
    model = SubCategories
    template_name = 'admin/sub-categoryDetail.html'


class SubCategoryDeleteView(DeleteView):
    model = SubCategories
    success_url = reverse_lazy('sub_categories')
    template_name = 'admin/sub-categories_confirm_delete.html'


def subcategories(request, pk):
    object_list = SubCategories.objects.filter(category_id=pk)
    print(object_list)
    return render(request, 'admin/sub-categories.html', {'object_list': object_list})


# products
class ProductsView(ListView):
    model = Products
    template_name = 'admin/products.html'


class ProductCreateView(CreateView):
    model = Products
    fields = '__all__'
    template_name = 'admin/productCreate.html'


class ProductDetailView(DetailView):
    model = Products
    template_name = 'admin/productDetail.html'


class ProductUpdateView(UpdateView):
    model = Products
    fields = '__all__'

    template_name = 'admin/productUpdate.html'


class ProductDeleteView(DeleteView):
    model = Products
    success_url = reverse_lazy('products')
    template_name = 'admin/product_confirm_delete.html'


def products(request, pk):
    object_list = Products.objects.filter(subcategories_id=pk)
    print(object_list)
    return render(request, 'admin/products.html', {'object_list': object_list})


# rest_framework
class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer


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
    # pk-category_id
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

from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, DetailView, DeleteView, UpdateView
from .models import Categories, SubCategories, Products
from django.shortcuts import render

from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin


class CategoriesView(LoginRequiredMixin, ListView):
    model = Categories
    template_name = 'admin/categories.html'


class CategoryCreateView(LoginRequiredMixin, CreateView):
    model = Categories
    fields = '__all__'
    template_name = 'admin/categoryCreate.html'


class CategoryDetailView(LoginRequiredMixin, DetailView):
    model = Categories
    template_name = 'admin/categoryDetail.html'


class CategoryDeleteView(LoginRequiredMixin, DeleteView):
    model = Categories
    success_url = reverse_lazy('categories')
    template_name = 'admin/categories_confirm_delete.html'


# SubCategories
class SubCategoriesView(LoginRequiredMixin, ListView):
    model = SubCategories
    template_name = 'admin/sub-categories.html'


class SubCategoryCreateView(LoginRequiredMixin, CreateView):
    model = SubCategories
    fields = '__all__'
    template_name = 'admin/sub-categoryCreate.html'


class SubCategoryDetailView(LoginRequiredMixin, DetailView):
    model = SubCategories
    template_name = 'admin/sub-categoryDetail.html'


class SubCategoryDeleteView(LoginRequiredMixin, DeleteView):
    model = SubCategories
    success_url = reverse_lazy('sub_categories')
    template_name = 'admin/sub-categories_confirm_delete.html'


@login_required
def subcategories(request, pk):
    object_list = SubCategories.objects.filter(category_id=pk)
    print(object_list)
    return render(request, 'admin/sub-categories.html', {'object_list': object_list})


# products
class ProductsView(LoginRequiredMixin, ListView):
    model = Products
    template_name = 'admin/products.html'


class ProductCreateView(LoginRequiredMixin, CreateView):
    model = Products
    fields = '__all__'
    template_name = 'admin/productCreate.html'


class ProductDetailView(LoginRequiredMixin, DetailView):
    model = Products
    template_name = 'admin/productDetail.html'


class ProductUpdateView(LoginRequiredMixin, UpdateView):
    model = Products
    fields = '__all__'

    template_name = 'admin/productUpdate.html'


class ProductDeleteView(LoginRequiredMixin, DeleteView):
    model = Products
    success_url = reverse_lazy('products')
    template_name = 'admin/product_confirm_delete.html'


@login_required
def products(request, pk):
    object_list = Products.objects.filter(subcategories_id=pk)
    print(object_list)
    return render(request, 'admin/products.html', {'object_list': object_list})

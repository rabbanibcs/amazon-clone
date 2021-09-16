from django.urls import path
from . import apiViews

urlpatterns = [
      # login , logout api
      path('register/', apiViews.RegisterAPI.as_view()),
      path('login/', apiViews.LoginAPI.as_view()),
      # all categories
      path('categories/', apiViews.CategoriesList.as_view()),
      # all sub categories for a category
      path('subcategories/<int:pk>/', apiViews.SubCategoriesList.as_view()),
      # all products for a subcategory
      path('products/<int:pk>/subcategory/', apiViews.ProductListForSubCategory.as_view()),
      # all products for a category
      path('products/<int:pk>/category/', apiViews.ProductListForCategory.as_view()),
      # view a product by Id
      path('product/<int:pk>/', apiViews.ProductApiView.as_view()),

    ]
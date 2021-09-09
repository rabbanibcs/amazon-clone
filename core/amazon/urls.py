from . import views
from django.urls import path

urlpatterns = [
      # login , logout api
      path('register/', views.RegisterAPI.as_view()),
      path('login/', views.LoginAPI.as_view()),
      # all categories
      path('categories/', views.CategoriesList.as_view()),
      # all sub categories for a category
      path('subcategories/<int:pk>/', views.SubCategoriesList.as_view()),
      # all products for a subcategory
      path('products/<int:pk>/subcategory/', views.ProductListForSubCategory.as_view()),
      # all products for a category
      path('products/<int:pk>/category/', views.ProductListForCategory.as_view()),
      # view a product by Id
      path('product/<int:pk>/', views.ProductApiView.as_view()),

    ]
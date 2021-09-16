from amazon import views as amazon_views
from . import views
from django.urls import path, include

urlpatterns = [
    path('', views.admin_login, name='admin_login'),
    path('home/', views.home, name='admin_home'),
    path('signup/', views.sign_up, name='signup'),
    path('login/', views.login_success, name='admin_login_success'),

    path('logout/', views.admin_logout, name='admin_logout'),
    path('users/', views.all_users, name='users'),
    path('user-delete/<int:pk>/', views.delete_user, name='delete_user'),
    path('calender/', views.calender, name='calender'),

    path('categories/', amazon_views.CategoriesView.as_view(), name='categories'),
    path('category/create/', amazon_views.CategoryCreateView.as_view(), name='category_create'),
    path('category/<int:pk>/', amazon_views.CategoryDetailView.as_view(), name='category_detail'),
    path('category/<int:pk>/delete/', amazon_views.CategoryDeleteView.as_view(), name='category_delete'),

    path('subcategories/', amazon_views.SubCategoriesView.as_view(), name='sub_categories'),
    path('subcategories/<int:pk>/', amazon_views.subcategories, name='sub_categories_pk'),

    path('subcategory/create/', amazon_views.SubCategoryCreateView.as_view(), name='sub_category_create'),
    path('subcategory/<int:pk>/', amazon_views.SubCategoryDetailView.as_view(), name='sub_category_detail'),
    path('subcategory/<int:pk>/delete/', amazon_views.SubCategoryDeleteView.as_view(), name='sub_category_delete'),
    path('products/', amazon_views.ProductsView.as_view(), name='products'),
    path('products/<int:pk>', amazon_views.products, name='subcategory_products'),
    path('product/create', amazon_views.ProductCreateView.as_view(), name='product_create'),
    path('product/<int:pk>/update', amazon_views.ProductUpdateView.as_view(), name='product_update'),
    path('product/<int:pk>/delete', amazon_views.ProductDeleteView.as_view(), name='product_delete'),
    path('product/<int:pk>/detail', amazon_views.ProductDetailView.as_view(), name='product_detail'),
]
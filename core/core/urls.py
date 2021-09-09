from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers
from amazon.views import ProductsViewSet

router = routers.DefaultRouter()
router.register(r'products', ProductsViewSet)


urlpatterns = [
    path('admin/', include('admin.urls')),
    # path('api/', include(router.urls)),
    path('api/', include('amazon.urls')),
    path('auth/', include('rest_framework.urls')),
    path('merchant/', include('amazon.urls')),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [

    # path('v1/', include('api.v1.urls')),
    path('login/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]
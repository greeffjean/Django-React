from django.urls import path
from django.views.generic import TemplateView

from myapp import views

urlpatterns = [
    path('', views.home, name='home'),
    path(r'my-react-page/<path:path>', views.my_view, name='react_app_with_path'),
]

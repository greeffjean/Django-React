from django.shortcuts import render


def home(request):
    return render(request, 'home_template.html', context={'context_variable': 'value'})

def my_view(request, path=''):
    return render(request, 'base_template.html', context={'context_variable': 'value'})
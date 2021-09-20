from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.shortcuts import reverse
from django.contrib.auth import logout
from .models import CustomerUser, MerchantUser, StaffUser, AdminUser, CustomUser
from rest_framework.authtoken.models import Token
from amazon.models import Categories, SubCategories, Products
from django.contrib.auth.decorators import login_required
import csv



def handle_uploaded_file(f):
    with open('name.txt', 'wb+') as destination:
        for chunk in f.chunks():
            print(chunk)
            destination.write(chunk)

@login_required
def home(request):
    subcat = SubCategories.objects.all()
    if request.method == 'POST':
        print(request.FILES['file'].name)
        print(request.FILES['file'].content_type)
        print(request.FILES['file'].content_type_extra)
        handle_uploaded_file(request.FILES['file'])
        return render(request, 'admin/home.html', {'lines': 'lines'})

    return render(request, 'admin/home.html', {'subcategories': subcat})


def sign_up(request):
    return render(request, 'admin/signUp.html')


def admin_login(request):
    return render(request, 'admin/login.html')


def login_success(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)
        if user:
            # attach to the current session 
            login(request, user)
            return HttpResponseRedirect(reverse('admin_home'))
        else:
            messages.error(request, 'Invalid Credentials')
            return HttpResponseRedirect(reverse('admin_login'))
    else:
        return HttpResponseRedirect(reverse('admin_login'))


def admin_logout(request):
    logout(request)
    return redirect('admin_login')


def calender(request):
    return render(request, 'admin/calendar.html')


@login_required
def all_users(request):
    users = CustomUser.objects.all()

    for user in users:
        # user.id=Token.objects.get_or_create(user=user)
        print(Token.objects.get_or_create(user=user))

    return render(request, 'admin/users.html', {'users': users})


@login_required
def delete_user(request, pk):
    user = CustomUser.objects.get(pk=pk)
    user.delete()
    return redirect('users')

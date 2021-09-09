from django.contrib import messages
from django.contrib.auth import authenticate
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.shortcuts import reverse
from django.contrib.auth import logout
from .models import CustomerUser, MerchantUser, StaffUser, AdminUser, CustomUser
from rest_framework.authtoken.models import Token


def sign_up(request):
    return render(request, 'admin/signUp.html')


def admin_login(request):
    return render(request, 'admin/login.html')


def login_success(request):
    email = request.POST.get('email')
    password = request.POST.get('password')
    user = authenticate(email=email, password=password)
    if user:
        return HttpResponseRedirect(reverse('admin_home'))
    else:
        messages.error(request, 'Invalid credentials')
        return HttpResponseRedirect(reverse('admin_login'))


def admin_logout(request):
    logout(request)
    return redirect('admin_login')


def home(request):
    return render(request, 'admin/home.html')


def calender(request):
    return render(request, 'admin/calendar.html')


def all_users(request):
    users = CustomUser.objects.all()

    for user in users:
        # user.id=Token.objects.get_or_create(user=user)
        print(Token.objects.get_or_create(user=user))

    return render(request, 'admin/users.html', {'users': users})


def delete_user(request,pk):
    user = CustomUser.objects.get(pk=pk)
    user.delete()
    return redirect('users')
from django.shortcuts import render

import os
from django.conf import settings
# Create your views here.

def index(request):

    images_list = os.listdir(os.path.join(settings.BASE_DIR, 'shop/static/shop/IMAGES/CAROUSEL'))
    
    context = {
        'images_list': images_list
    }

    return render(request, 'shop/index.html', context)

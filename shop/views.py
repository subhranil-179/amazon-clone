from django.shortcuts import render

import os
from django.conf import settings
# Create your views here.

def index(request):

    carousel_images_list = os.listdir(os.path.join(settings.BASE_DIR, 'shop/static/shop/IMAGES/CAROUSEL'))
    feature_card_image_list = os.listdir(os.path.join(settings.BASE_DIR, 'shop/static/shop/IMAGES/CARD_OFFER'))

    context = {
        'carousel': carousel_images_list,
        'feature_card_image_list': feature_card_image_list
    }

    return render(request, 'shop/index.html', context)

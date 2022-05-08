from django.db import models

# Create your models here.

class Item(models.Model):
    ID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    price = models.IntegerField()

    def __str__(self):
        return self.name

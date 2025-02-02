# Generated by Django 5.0.7 on 2024-07-14 17:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RecipeBook', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='cover',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='recipe',
            name='todos',
            field=models.JSONField(blank=True, default=list),
        ),
        migrations.AlterField(
            model_name='comment',
            name='recipe',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='RecipeBook.recipe'),
        ),
    ]

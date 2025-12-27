from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True, style={'input_type':'password'}, min_length=8)
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        
        
    def create(self, validated_data):
        # User.objects.create -- this is a regular thing 
        # User.objects.create_user -- automatically hash the password 
        
        
        # all the field are passed into the creation function
        user = User.objects.create_user(**validated_data)
        
        return user
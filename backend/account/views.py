from rest_framework.response import Response 
from rest_framework import generics
from rest_framework.views import APIView
from django.contrib.auth.models import User
from .serializers import UserAccountSerializer
from rest_framework.permissions import AllowAny,IsAuthenticated


# Create your views here.
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserAccountSerializer
    permission_classes = [AllowAny]

  
        
class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        response = {
            'status': 'Request was permitted'  
        }
        return Response(response)  
      


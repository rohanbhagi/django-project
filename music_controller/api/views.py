from django.shortcuts import render
from .serializers import RoomSerializer, CreateRoomSerializer
from .models import Room
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer


class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        seriliazer = self.serializer_class(data=request.data)
        if seriliazer.is_valid():
            guest_can_pause = seriliazer.data.get('guest_can_pause')
            votes_to_skip = seriliazer.data.get('votes_to_skip')
            host = self.request.session.session_key
            queryset = Room.objects.filter(host=host)

            if queryset.exists():
                room = queryset[0]
                room.guest_can_pause = guest_can_pause
                room.votes_to_skip = votes_to_skip

                room.save(update_fields=['guest_can_pause', 'votes_to_skip'])
            
            else:
                room = Room(host=host, guest_can_pause = guest_can_pause, votes_to_skip=votes_to_skip)
                room.save()

            return Response(RoomSerializer(room).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request: Invlaid data...'}, status=status.HTTP_400_BAD_REQUEST)


class GetRoom(APIView):
    serializer =  RoomSerializer
    lookup_url_kwarg = 'code'

    def get(self, request, format=None):
        code = request.GET.get(self.lookup_url_kwarg)
        if code != None:
            room = Room.objects.filter(code=code)
            if len(room) > 0:
                data = RoomSerializer(room[0]).data
                data['is_host'] = self.request.session.session_key == room[0].host
                return Response(data=data, status=status.HTTP_200_OK)
            return Response({'Bad Request': 'Invalid room code'}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'Bad Request': 'Invalid room code'}, status=status.HTTP_400_BAD_REQUEST)





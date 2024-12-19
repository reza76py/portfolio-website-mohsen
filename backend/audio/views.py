from rest_framework.views import APIView
from rest_framework.response import Response
from .models import AudioFile

class AudioFileListView(APIView):
    def get(self, request):
        audio_files = AudioFile.objects.all()
        data = [
            {
                "title": audio.title,
                "description": audio.description,
                "file_url": request.build_absolute_uri(audio.file.url),


                "image_url": request.build_absolute_uri(audio.image.url) if audio.image else None,


                "uploaded_at": audio.uploaded_at,
            }
            for audio in audio_files
        ]
        return Response(data)
        


from rest_framework.views import APIView
from rest_framework.response import Response
from .models import AudioFile, MusicLink

class AudioFileListView(APIView):
    def get(self, request):
        # Fetch audio files
        audio_files = AudioFile.objects.all()
        audio_data = [
            {
                "title": audio.title,
                "description": audio.description,
                "file_url": request.build_absolute_uri(audio.file.url),
                "image_url": request.build_absolute_uri(audio.image.url) if audio.image else None,
                "uploaded_at": audio.uploaded_at,
            }
            for audio in audio_files
        ]

        # Fetch music links
        music_links = MusicLink.objects.all()
        link_data = [
            {
                "name": link.name,
                "description": link.description,
                "url": link.url,
                "cover_image": request.build_absolute_uri(link.cover_image.url) if link.cover_image else None,
                "created_at": link.created_at,
            }
            for link in music_links
        ]

        # Combine data
        return Response({
            "audio_files": audio_data,
            "music_links": link_data,
        })

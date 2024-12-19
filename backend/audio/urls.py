from django.urls import path
from .views import AudioFileListView

urlpatterns = [
    path('audio-files/', AudioFileListView.as_view(), name='audio-file-list'),
]

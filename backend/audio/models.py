from django.db import models

class AudioFile(models.Model):
    title = models.CharField(max_length=200, help_text="Title of the audio file")
    description = models.TextField(blank=True, help_text="Description of the audio file")
    file = models.FileField(upload_to='audio_files/', help_text="Upload the audio file")
    image = models.ImageField(upload_to='audio_icons/', null=True, blank=True, help_text="Upload an image for the audio icon")
    uploaded_at = models.DateTimeField(auto_now_add=True, help_text="Timestamp of upload")

    def __str__(self):
        return self.title
    
class MusicLink(models.Model):
    name = models.CharField(max_length=200, help_text="Name of the music link")
    description = models.TextField(blank=True, help_text="Description of the music link")
    url = models.URLField(max_length=300, help_text="URL of the music link")
    cover_image = models.ImageField(upload_to='link_covers/', null=True, blank=True, help_text="Cover image for the music link")
    created_at = models.DateTimeField(auto_now_add=True, help_text="Timestamp of creation")

    def __str__(self):
        return self.name
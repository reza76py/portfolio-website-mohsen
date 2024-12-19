from django.db import models

class AudioFile(models.Model):
    title = models.CharField(max_length=200, help_text="Title of the audio file")
    description = models.TextField(blank=True, help_text="Description of the audio file")
    file = models.FileField(upload_to='audio_files/', help_text="Upload the audio file")



    image = models.ImageField(upload_to='audio_icons/', null=True, blank=True, help_text="Upload an image for the audio icon")




    uploaded_at = models.DateTimeField(auto_now_add=True, help_text="Timestamp of upload")

    def __str__(self):
        return self.title

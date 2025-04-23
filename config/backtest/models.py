from django.db import models
class Summary(models.Model):
    id = models.AutoField(db_column='5CS01_01_G_summary_id', primary_key=True)
    total_green = models.IntegerField(db_column='5CS01_01_G_summary_total_green')
    total_amber = models.IntegerField(db_column='5CS01_01_G_summary_total_amber')
    total_red = models.IntegerField(db_column='5CS01_01_G_summary_total_red')

    class Meta:
        db_table = '5CS01_01_G_summary'
        managed = False  # Important if Django didn't create this table
# Create your models here.

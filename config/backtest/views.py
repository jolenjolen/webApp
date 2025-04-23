from django.shortcuts import render
from django.http import HttpResponse
from .models import Summary

def home(request):
    summaries = Summary.objects.all()

    stats_green = [s.total_green for s in summaries]
    stats_amber = [s.total_amber for s in summaries]
    stats_red = [s.total_red for s in summaries]

    return render(request, 'backtest/home.html', {
        'stats_green': stats_green,
        'stats_amber': stats_amber,
        'stats_red': stats_red,
    })

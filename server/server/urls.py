"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app.views import *
from app.nspodsviews import *
from app.logsviews import *

from app.deplsviews import *
from app.servs_view import *
from app.eventsviews import *
from app.crmadminipview import *
urlpatterns = [
    path('admin/', admin.site.urls),
    path('nodes/', ReactView.as_view(), name="nodes"),
    path('getpods/',NsPodsView.as_view(),name="getpods"),
    path('getdepls/',DeplsView.as_view(),name="get depls"),
    path('getcrmadminip',CRMadminView.as_view(),name="get crmadmin ip"),
    path('getservices/',ServsView.as_view(),name="get services"),
    path('getlogs/<str:namespace>/<str:pod>',LogsView.as_view(),name="getlogs"),
    path('getevents/<str:namespace>/<str:depl>',EventsView.as_view(),name="egt events"),
    path('deletepod/<str:namespace>/<str:pod>',NsPodsView.as_view(),name="deletepod"),
    path('deletedepl/<str:namespace>/<str:depl>',DeplsView.as_view(),name="delete deployment"),
    path('updatedepl/<str:namespace>/<str:depl>/<str:number>',DeplsView.as_view(),name="update deployment")
]

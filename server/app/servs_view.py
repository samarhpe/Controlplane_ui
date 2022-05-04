from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from kubernetes import client, config
#from .lib import lib
import os
from app import main
# Configs can be set in Configuration class directly or using helper utility
#config.load_kube_config(config_file=r"./server/app/k3s.yaml")

v1 = client.CoreV1Api()
v2 = client.AppsV1Api()
# Create your views here.
class ServsView(APIView):

    def get(self, request):
        namespaces=main.list_all_namespaces(v1)
        data={}
        for ns in namespaces:
            data[ns]=main.get_service(v1,ns)

        return Response(data)
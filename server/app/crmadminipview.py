from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from kubernetes import client, config
#from .lib import lib
import os
import subprocess
import re
from app import main
# Configs can be set in Configuration class directly or using helper utility
#config.load_kube_config(config_file=r"./server/app/k3s.yaml")

v1 = client.CoreV1Api()
v2 = client.AppsV1Api()
class CRMadminView(APIView):
    def get(self, request):
        proc = subprocess.Popen(['crm','configure', 'show' ,'admin-ip' ], stdout=subprocess.PIPE)
        out = proc.communicate()[0]
        out=str(out)
        pattern = re.compile(r'(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})')
        ip=pattern.search(out)[0]
        data={}
        data["ip"]=ip
        return Response(data)

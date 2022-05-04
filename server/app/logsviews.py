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
class LogsView(APIView):
    def get(self,request,namespace,pod):

        #ns=self.request.query_params.get('namespace')
        #pod=self.request.query_params.get('pod')
        res=main.get_logs(v1,namespace,pod)
        return Response(res)
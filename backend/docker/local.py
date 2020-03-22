#!/usr/bin/env python

from subprocess import call
# call migrate, and load initial data before we runserver
call(["python3", "/AnonymousDrChat/manage.py", "migrate"])
call(["python3", "/AnonymousDrChat/manage.py", "loaddata", "/AnonymousDrChat/data/initial_data.json"])
call(["python3", "/AnonymousDrChat/manage.py", "runserver", "0.0.0.0:8000"])
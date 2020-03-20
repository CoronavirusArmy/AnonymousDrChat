#!/usr/bin/python

from subprocess import call

call(["/usr/bin/env", "python3", "/var/www/AnonymousDrChat/manage.py", "migrate"])
call(["/usr/bin/env", "python3", "/var/www/AnonymousDrChat/manage.py", "collectstatic", "--no-input"])
call(["/usr/bin/env", "python3", "/var/www/AnonymousDrChat/manage.py", "compilemessages"])


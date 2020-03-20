from .base import *

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE':   'django.db.backends.postgresql_psycopg2',
        'NAME':     env.str('DB_NAME'),
        'USER':     env.str('DB_USER'),
        'PASSWORD': env.str('DB_PWD'),
        'HOST':     env.str('DB_SERVER'),
        'PORT':     env.int('DB_PORT'),
    }
}
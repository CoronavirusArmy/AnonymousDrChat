FROM python:3
ENV PYTHONUNBUFFERED 1

RUN mkdir /AnonymousDrChat
WORKDIR /AnonymousDrChat
ADD ./backend/requirements.txt .
RUN pip install -r requirements.txt

ADD ./backend .
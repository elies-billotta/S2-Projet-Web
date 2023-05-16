import sqlite3
from model import *
from flask import Flask , render_template
app = Flask(__name__, template_folder='templates', static_folder='static')

#get a random movie from the database
@app.route('/')
def index():
    test = Film.get_random_film()
    return render_template('index.html',test=test)

@app.route('/game')
def game():
    return render_template('game.html')